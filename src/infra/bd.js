import Usuario from '../models/Usuario.js'
import Tarefa from '../models/Tarefa.js'
// Cria vários objetos e os adiciona a um array para simular uma lista de objetos
const bdUsuarios = []
const bdTarefas = []
// Cria um objeto do tipo Usuario e adiciona a lista de usuarios
const user1 = new Usuario('Nome do usuário 1', 'teste', 'Senha 1')
bdUsuarios.push(user1)
// Cria um objeto do tipo Usuario e adiciona a lista de usuarios
const user2 = new Usuario('Nome do usuário 2', 'Email 2', 'Senha 2')
bdUsuarios.push(user2)
// Cria um objeto do tipo Tarefa e adiciona a lista de tarefas
const tarefa1 = new Tarefa('Título da tarefa 1', 'Descrição da tarefa 1', 'A fazer', new Date())
bdTarefas.push(tarefa1)
// Cria um objeto do tipo Tarefa e adiciona a lista de tarefas
const tarefa2 = new Tarefa('Título da tarefa 2', 'Descrição da tarefa 2', 'A fazer', new Date())
bdTarefas.push(tarefa2)
// Exporta as listas de objetos
export { bdUsuarios, bdTarefas }