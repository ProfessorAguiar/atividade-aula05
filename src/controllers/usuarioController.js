import { bdUsuarios } from '../infra/bd.js'
function usuarioController(app) {
    app.get('/usuario', listar)
    app.get('/usuario/email/:email', buscarPorEmail)
    app.post('/usuario', inserir)
    function listar(req, res) {
        const usuarios = bdUsuarios
        // Devolve a lista de Usuarios
        res.send(usuarios)
    }
    function inserir(req, res) {
        res.send('Método POST')
        console.log(req.body)
    }
    function buscarPorEmail(req, res){
        // Busca o email na lista de usuarios
        const usuario = bdUsuarios.find(usuario => 
            usuario.email === req.params.email)
        // Se o usuario não for encontrado, devolve um erro
        if(!usuario){
            res.status(404).send('Usuário não encontrado')
        }
        // Se o usuario for encontrado, devolve o usuario
        res.send(usuario)
    }
}
export default usuarioController