import Usuario from '../models/Usuario.js'
function usuarioController(app) {
    app.get('/usuario', listar)
    app.post('/usuario', inserir)
    function listar(req, res) {
        const user1=new Usuario('Vinicius Aguiar','aguiar@senac.com','123456')
        res.send('Rota ativada com GET e recurso usuario:')
        console.log(user1)
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