class tarefaController {
    static rotas(app){
        // Rota para o recurso tarefa
        app.get('/tarefa', tarefaController.listar)
        app.post('/tarefa', tarefaController.inserir)
    }
    static listar(req, res){
        res.send('Rota ativada com GET e recurso tarefa: lista de tarefas deve ser retornada')
    }
    static inserir(req, res){
        res.send('Rota ativada com POST e recurso tarefa: tarefa deve ser inserida')
    }
}
export default tarefaController