import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Funcionarios from '../models/Funcionarios'
import funcionariosView from '../views/funcionarios_view'
import * as Yup from 'yup'

export default {
  async index(req: Request, res: Response) {
    const funcionariosRepo = getRepository(Funcionarios)

    const funcionario = await funcionariosRepo.find({
      relations: ['fotofunc']
    })

    return res.json(funcionariosView.renderMany(funcionario))
  },

  async show(req: Request, res: Response) {
    const { id } = req.params

    const funcionariosRepo = getRepository(Funcionarios)

    const funcionario = await funcionariosRepo.findOneOrFail(id, {
      relations: ['fotofunc']
    })

    return res.json(funcionariosView.render(funcionario))
  },

  async create(req: Request, res: Response) {
    const {
      nome,
      funcao,
      departamento,
      email,
      telefone
    } = req.body
  
    const funcionariosRepo = getRepository(Funcionarios)
  
    const requestFotos = req.files as Express.Multer.File[]

    const fotofunc = requestFotos.map(foto => {
      return { path: foto.filename }
    })

    const dados = {
      nome,
      funcao,
      departamento,
      email,
      telefone,
      fotofunc
    }

    const esquema = Yup.object().shape({
      nome: Yup.string().required('Campo Nome obrigatório'),
      funcao: Yup.string().required('Campo Função obrigratório'),
      departamento: Yup.string().required('Campo Departamento obrigatório'),
      email: Yup.string().required('Campo Email obrigatório').email(),
      telefone: Yup.string().required('Campo Telefone obrigatório').min(10),
      fotofunc: Yup.array(Yup.object().shape({
        path: Yup.string().required('Campo Foto obrigatório')
      }))
    })

    await esquema.validate(dados, { abortEarly: false })

    const funcionario = funcionariosRepo.create(dados)
  
    await funcionariosRepo.save(funcionario)
  
    return res.status(201).json(funcionario)
  }
}