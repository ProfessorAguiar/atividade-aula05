class usuarioController {
    static rotas(app){
        // Rota para o recurso usuario
        app.get('/usuario', usuarioController.listar)
        app.post('/usuario', usuarioController.inserir)
    }
    static listar(req, res){
        res.send('Rota ativada com GET e recurso usuario: lista de usuarios deve ser retornada')
    }
    static inserir(req, res){
        res.send('Rota ativada com POST e recurso usuario: usuario deve ser inserido')
    }
}
export default usuarioController