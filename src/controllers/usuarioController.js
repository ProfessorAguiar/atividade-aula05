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
                [userAdd.nome, userAdd.email, userAdd.senha]
            )
        })()

        res.send('Usuário inserido com sucesso')

    }
    function buscarPorEmail(req, res) {
        // Busca o email na lista de usuarios

        (async () => {
            // open the database
            const db = await open({
                filename: './src/infra/Tarefas.db',
                driver: sqlite3.Database
            })
            const busca = req.params.email
            const result = await db.all(`SELECT * FROM Usuario where email like ?`, busca)
            if (!result) {
                res.status(404).send('Usuário não encontrado')
            }
            // Se o usuario for encontrado, devolve o usuario
            res.send(result)
        })()

    }
    function deletar(req, res) {
        (async () => {
            // open the database
            const db = await open({
                filename: './src/infra/Tarefas.db',
                driver: sqlite3.Database
            })
            const busca = req.params.email
            const result = await db.all(`DELETE FROM Usuario where email like ?`, busca)
            if (!result) {
                res.status(404).send('Usuário não encontrado')
            }
            // Se o usuario for encontrado, devolve o usuario
            res.send(result)
        })()
    }
    function atualizar(req, res) {
        (async () => {
            // open the database
            const db = await open({
                filename: './src/infra/Tarefas.db',
                driver: sqlite3.Database
            })
            const busca = req.params.email
            const result = await db.all(`UPDATE Usuario SET nome=?, eamil=?, senha=? 
            where email like ?`, req.body.nome, req.body.email, req.body.senha, busca)
            if (!result) {
                res.status(404).send('Usuário não encontrado')
            }
            res.send({ mensagem: 'Usuário alterado com sucesso' })
        })()

    }
}
export default usuarioController