import { Request, Response } from 'express'
import { getConnection, getRepository } from 'typeorm'
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

  async like(req: Request, res: Response) {
    const { id } = req.params

    const funcionariosRepo = getRepository(Funcionarios)

    const likes = await funcionariosRepo.findOneOrFail(id)

    likes.curtir += 1

    await getConnection().createQueryBuilder()
                       .update(Funcionarios)
                       .set({ curtir: likes.curtir })
                       .where(`id = ${id}`)
                       .execute()

    const funcionario = await funcionariosRepo.findOneOrFail(id)

    return res.json(funcionariosView.render(funcionario))
  },

  async dislike(req: Request, res: Response) {
    const { id } = req.params

    const funcionariosRepo = getRepository(Funcionarios)

    const dislikes = await funcionariosRepo.findOneOrFail(id)

    dislikes.curtir -= 1

    await getConnection().createQueryBuilder()
                         .update(Funcionarios)
                         .set({ curtir: dislikes.curtir })
                         .where(`id = ${id}`)
                         .execute()

    const funcionario = await funcionariosRepo.findOneOrFail(id)

    return res.json(funcionariosView.render(funcionario))
  },

  async create(req: Request, res: Response) {
    const {
      nome,
      funcao,
      departamento,
      email,
      curtir,
      telefone,
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
      curtir,
      fotofunc
    }

    const esquema = Yup.object().shape({
      nome: Yup.string().required('Campo Nome obrigatório'),
      funcao: Yup.string().required('Campo Função obrigratório'),
      departamento: Yup.string().required('Campo Departamento obrigatório'),
      email: Yup.string().required('Campo Email obrigatório').email(),
      telefone: Yup.string().required('Campo Telefone obrigatório').min(10),
      curtir: Yup.string(),
      fotofunc: Yup.array(Yup.object().shape({
        path: Yup.string().required('Campo Foto obrigatório')
      }))
    })

    await esquema.validate(dados, { abortEarly: false })

    const funcionario = funcionariosRepo.create(dados)
  
    await funcionariosRepo.save(funcionario)
  
    return res.status(201).json(funcionario)
  },

  async remove(req: Request, res: Response) {
    const { id } = req.params

    const funcionariosRepo = getRepository(Funcionarios)

    await funcionariosRepo.delete(id)

    return res.send({message: 'Cadastro de Funcionários Excluído'})
  }
}