function usuarioController(app) {
    app.get('/usuario', listar)
    app.post('/usuario', inserir)
    function listar(req, res) {
        res.send('Rota ativada com GET e recurso usuario: lista de usuarios deve ser retornada')
    }
    function inserir(req, res) {
        res.send({
            "nome":"Vinicius Aguiar",
            "email":"aguiar.professor@outlook.com"
        })
        console.log(req.body)
    }
}
export default usuarioController