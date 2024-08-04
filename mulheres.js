//inicia express:
const express = require("express") 
//configuraprimeira parte da rota:
const router = express.Router()
//biblioteca UUID:
const{v4:uuidv4} = require('uuid')
//inicia o app:
const app = express()
//trata resposta da requisição para formato jSON:
app.use(express.json())
//define porta:
const porta = 3333

//cria lista inicial de mulheres:
const mulheres = [
 {
  id: '1',
  nome: 'Simara Conceição',
  imagem: 'https://bit.ly/3LJIyOF',
  minibio: 'Desenvolvedora e instrutora',
 },
 {
  id: '2',
  nome: 'Iana Chan',
  imagem: 'https://bit.ly/3JCXBqP',
  minibio: 'CEO & Founder da PrograMaria',
 },
 {
  id: '3',
  nome: 'Luana Pimentel',
  imagem: 'https://bit.ly/3FKpFaz',
  minibio: 'Senior Staff Software Engineer',
 }]

//GET - função para exibir mulheres da lista
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//POST - função para criar mulher
function criaMulher(request, response){
  const NovaMulher = {
    id: uuidv4(),
    nome: request.body.nome, //vem de dentro da requisição quando o nome for preenchido.
    imagem: request.body.imagem,
    minibio: request.body.minibio
  }
  //dados da nova mulher é inserida na lista de mulheres:
  mulheres.push(NovaMulher)
  //retorna lista atualizada:
  response.json(mulheres)
}

//PATCH - correção de mulher
//se o id passado como requisição for encontrar na lista de mulheres, as propriedades alteradas serão gravadas
function corrigeMulher(request, response) {
    function encontraMulher(mulher) {
        if (mulher.id === request.params.id) {
            return mulher
        }
    }
    const mulherEncontrada = mulheres.find(encontraMulher)
    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    response.json(mulheres)
}

//verbo HTTP DELETE - "Deleção" de mulher da lista:
//será recebido um id como parâmetro e todas as mulheres com ID diferente daquele serão adicionadas a uma nova lista que
//será retornada em formato json.
function deletaMulher(request, response) {
    function todasMenosEla(mulher) {
        if(mulher.id !== request.params.id) {
            return mulher
        }
    }
    const mulheresQueFicaram = mulheres.filter(todasMenosEla)
    response.json(mulheresQueFicaram)
}


function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

//configura rota GET /mulheres
app.use(router.get('/mulheres', mostraMulheres))
//configura rota POST /mulheres
app.use(router.post('/mulheres', criaMulher))
//configura rota PATCH /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher))
//configura a rota DELETE /mulheres
app.use(router.delete('/mulheres/:id', deletaMulhee))
//srvidor ouve porta:
app.listen(porta, mostraPorta)
