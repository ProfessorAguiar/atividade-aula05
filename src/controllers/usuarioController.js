import { bdUsuarios } from '../infra/bd.js'
function usuarioController(app) {
    app.get('/usuario', listar)
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
}
export default usuarioController