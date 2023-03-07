import Tarefa from '../models/Tarefa.js'
function tarefaController(app) {
    app.get('/tarefa', listar)
    app.post('/tarefa', inserir)
    function listar(req, res) {
        const d = new Date();
        const tarefa=new Tarefa('Back-End','uso do Express e bibliotecas',true,d)
        res.send('Rota ativada com GET e recurso tarefa:')
        console.log(tarefa)
    }
    function inserir(req, res) {
        res.send('Rota ativada com POST e recurso tarefa: tarefa deve ser inserida')
        console.log(req.body)
    }
}
export default tarefaController