function tarefaController(app) {
    app.get('/tarefa', listar)
    app.post('/tarefa', inserir)
    function listar(req, res) {
        res.send('Rota ativada com GET e recurso tarefa: lista de tarefas deve ser retornada')
    }
    function inserir(req, res) {
        res.send('Rota ativada com POST e recurso tarefa: tarefa deve ser inserida')
        console.log(req.body)
    }
}
export default tarefaController