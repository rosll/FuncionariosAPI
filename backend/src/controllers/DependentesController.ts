import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Dependentes from '../models/Dependentes'
import dependentesView from '../views/dependentes_view'
import * as Yup from 'yup'

export default {
  async index(req: Request, res: Response) {
    const dependentesRepo = getRepository(Dependentes)

    const dependente = await dependentesRepo.find({
      relations: ['fotodep']
    })

    return res.json(dependentesView.renderMany(dependente))
  },

  async show(req: Request, res: Response) {
    const { id } = req.params

    const dependentesRepo = getRepository(Dependentes)

    const dependente = await dependentesRepo.findOneOrFail(id, {
      relations: ['fotodep']
    })

    return res.json(dependentesView.render(dependente))
  },

  async create(req: Request, res: Response) {
    const {
      nome,
      data_nascimento,
      grau_parentesco,
      id_funcionario,
    } = req.body
  
    const dependentesRepo = getRepository(Dependentes)
  
    const requestFotos = req.files as Express.Multer.File[]

    const fotodep = requestFotos.map(foto => {
      return { path: foto.filename }
    })

    const dados = {
      nome,
      data_nascimento,
      grau_parentesco,
      id_funcionario,
      fotodep
    }

    const esquema = Yup.object().shape({
      nome: Yup.string().required('Campo Nome obrigatório'),
      data_nascimento: Yup.string().required('Campo Data de Nascimento obrigatório'),
      grau_parentesco: Yup.string().required('Campo Grau Parentesco obrigatório'),
      id_funcionario: Yup.string().required('Campo Id Funcionário obrigatório'),
      fotodep: Yup.array(Yup.object().shape({
        path: Yup.string().required('Campo Foto obrigatório')
      }))
    })

    await esquema.validate(dados, { abortEarly: false })

    const dependente = dependentesRepo.create(dados)
  
    await dependentesRepo.save(dependente)
  
    return res.status(201).json(dependente)
  },

  async remove(req: Request, res: Response) {
    const { id } = req.params

    const dependentesRepo = getRepository(Dependentes)

    await dependentesRepo.delete(id)

    return res.send({message: 'Cadastro de Dependentes Excluído'})
  }
}