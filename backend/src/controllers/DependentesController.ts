import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Dependentes from '../models/Dependentes'

export default {
  async index(req: Request, res: Response) {
    const dependentesRepo = getRepository(Dependentes)

    const dependente = await dependentesRepo.find()

    return res.json(dependente)
  },

  async show(req: Request, res: Response) {
    const { id } = req.params

    const dependentesRepo = getRepository(Dependentes)

    const dependente = await dependentesRepo.findOneOrFail(id)

    return res.json(dependente)
  },

  async create(req: Request, res: Response) {
    const {
      nome,
      data_nascimento,
      grau_parentesco,
      id_funcionario,
    } = req.body
  
    const dependentesRepo = getRepository(Dependentes)
  
    const dependente = dependentesRepo.create({
      nome,
      data_nascimento,
      grau_parentesco,
      id_funcionario,
    })
  
    await dependentesRepo.save(dependente)
  
    return res.status(201).json(dependente)
  }
}