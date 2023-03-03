function usuarioController(app) {
    app.get('/usuario', listar)
    app.post('/usuario', inserir)
    function listar(req, res) {
        res.send('Rota ativada com GET e recurso usuario: lista de usuarios deve ser retornada')
    }
    function inserir(req, res) {
        res.send('Rota ativada com POST e recurso usuario: usuario deve ser inserido')
    }
}
export default usuarioController