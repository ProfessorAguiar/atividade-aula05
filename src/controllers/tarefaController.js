import { bdTarefas } from '../infra/bd.js';
function tarefaController(app) {
    app.get('/tarefa', listar)
    app.post('/tarefa', inserir)
    function listar(req, res) {
        const tarefas = bdTarefas
        // Devolve a lista de tarefas
        res.send(tarefas)
    }
    function inserir(req, res) {
        res.send('Método POST')
        console.log(req.body)
    }
}
export default tarefaController