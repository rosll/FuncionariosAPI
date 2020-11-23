import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Funcionarios from '../models/Funcionarios'

export default {
  async index(req: Request, res: Response) {
    const funcionariosRepo = getRepository(Funcionarios)

    const funcionario = await funcionariosRepo.find()

    return res.json(funcionario)
  },

  async show(req: Request, res: Response) {
    const { id } = req.params

    const funcionariosRepo = getRepository(Funcionarios)

    const funcionario = await funcionariosRepo.findOneOrFail(id)

    return res.json(funcionario)
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
  
    const funcionario = funcionariosRepo.create({
      nome,
      funcao,
      departamento,
      email,
      telefone
    })
  
    await funcionariosRepo.save(funcionario)
  
    return res.status(201).json(funcionario)
  }
}