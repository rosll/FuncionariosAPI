import { Router } from 'express'
import multer from 'multer'
import uploadCfg from './config/upload'
import FuncionariosController from './controllers/FuncionariosController'
import DependentesController from './controllers/DependentesController'

const routes = Router()
const upload = multer(uploadCfg)

routes.get('/funcionarios', FuncionariosController.index)
routes.get('/funcionarios/:id', FuncionariosController.show)
routes.post('/funcionarios', upload.array('fotofunc'), FuncionariosController.create)
routes.delete('/funcionarios/:id', FuncionariosController.remove)

routes.get('/dependentes', DependentesController.index)
routes.get('/dependentes/:id', DependentesController.show)
routes.post('/dependentes', upload.array('fotodep'), DependentesController.create)
routes.delete('/dependentes/:id', DependentesController.remove)

export default routes