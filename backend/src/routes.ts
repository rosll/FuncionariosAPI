import { Router } from 'express'
import FuncionariosController from './controllers/FuncionariosController'
import DependentesController from './controllers/DependentesController'

const routes = Router()

routes.get('/funcionarios', FuncionariosController.index)
routes.get('/funcionarios/:id', FuncionariosController.show)
routes.post('/funcionarios', FuncionariosController.create)

routes.get('/dependentes', DependentesController.index)
routes.get('/dependentes/:id', DependentesController.show)
routes.post('/dependentes', DependentesController.create)

export default routes