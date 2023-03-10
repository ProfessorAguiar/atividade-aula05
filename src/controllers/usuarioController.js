import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import { bdUsuarios } from '../infra/bd.js'
function usuarioController(app) {
    app.get('/usuario', listar)
    app.get('/usuario/email/:email', buscarPorEmail)
    app.post('/usuario', inserir)
    app.delete('/usuario/email/:email', deletar)
    app.put('/usuario/email/:email', atualizar)
    function listar(req, res) {
        // this is a top-level await 
        (async () => {
            // open the database
            const db = await open({
                filename: './src/infra/Tarefas.db',
                driver: sqlite3.Database
            })
            const result = await db.all('SELECT * FROM Usuario')
            res.send(result)
        })()
    }
    function inserir(req, res) {
        (async () => {
            // open the database
            const db = await open({
                filename: './src/infra/Tarefas.db',
                driver: sqlite3.Database
            })
            const userAdd = req.body
            console.log(userAdd)
            const result = await db.run(
                `INSERT INTO Usuario(nome,email,senha) 
                VALUES(?,?,?)`,
                [userAdd.nome,userAdd.email,userAdd.senha]
            )
        })()

        res.send('Usuário inserido com sucesso')

    }
    function buscarPorEmail(req, res) {
        // Busca o email na lista de usuarios
        const usuario = bdUsuarios.find(usuario =>
            usuario.email === req.params.email)
        // Se o usuario não for encontrado, devolve um erro
        if (!usuario) {
            res.status(404).send('Usuário não encontrado')
        }
        // Se o usuario for encontrado, devolve o usuario
        res.send(usuario)
    }
    function deletar(req, res) {
        // Busca o email na lista de usuarios
        const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email)
        // Se o usuario não for encontrado, devolve um erro
        if (!usuario) {
            res.status(404).send('Usuário não encontrado')
        }
        // Se o usuario for encontrado, deleta o usuario
        const index = bdUsuarios.indexOf(usuario)
        bdUsuarios.splice(index, 1)
        // Devolve o usuario deletado
        res.send(usuario)
    }
    function atualizar(req, res) {
        // Busca o email na lista de usuarios
        const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email)
        // Se o usuario não for encontrado, devolve um erro
        if (!usuario) {
            res.status(404).send('Usuário não encontrado')
        }
        // Se o usuario for encontrado, deleta o usuario
        usuario.nome = (req.body.nome || usuario.nome)
        usuario.email = (req.body.email || usuario.email)
        usuario.senha = (req.body.senha || usuario.senha)
        // Devolve o usuario atualizado
        res.send({ mensagem: 'Usuário alterado com sucesso' })
    }
}
export default usuarioController