import express from 'express'
const app = express()
import usuarioController from './controllers/usuarioController.js'
import tarefaController from './controllers/tarefaController.js'
usuarioController(app)
tarefaController(app)
export default app
