import express from 'express'
const app = express()
app.use(express.json())
import usuarioController from './controllers/usuarioController.js'
import tarefaController from './controllers/tarefaController.js'
usuarioController(app)
tarefaController(app)
export default app
