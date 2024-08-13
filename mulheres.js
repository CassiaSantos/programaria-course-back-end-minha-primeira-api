//inicia express:
const express = require("express") 
//configuraprimeira parte da rota:
const router = express.Router()

//cria variável Mulher para recuperar dados do Model --> será usada toda vez que me referir ao banco de dados no MONGO DB:
const Mulher = require('./mulherModel')

//uso de conexão com o banco de dados:
const conectaBancoDeDados = require('./bancoDeDados')
conectaBancoDeDados()

//inicia o app:
const app = express()
//trata resposta da requisição para formato jSON:
app.use(express.json())
//define porta:
const porta = 3333

// ----------------------------------------------- Métodos HTTP -----------------------------------------------

//GET - função para exibir mulheres da lista cadastradas no banco de Dados
async function mostraMulheres(request, response) {
    try {
        //espera a conexão com banco de dados e após ela ocorrer, recupera as mulheres cadastradas na lista de Divas
        const mulheresVindasDoBancoDeDados = await Mulher.find()
        //em seguida, retorna a lista de mulheres cadastadas no banco de dados em formato de Json:
        response.json(mulheresVindasDoBancoDeDados)

    //caso ocorra algum problema, mostre o erro no console
    } catch (erro) {
        console.log(erro)
    }
}

///POST - função para criar mulher
async function criaMulher(request, response){
    //Uma mulher é salva como objeto que tem a regra que vem do Model
    const NovaMulher = new Mulher({
      nome: request.body.nome, //vem de dentro da requisição quando o nome for preenchido.
      imagem: request.body.imagem,
      minibio: request.body.minibio,
      citacao: request.body.citacao
    })

    try {
        const mulherCriada = await NovaMulher.save()//os dados da nova mulher serão salvos;
        response.status(201).json(mulherCriada) //se a nova mulher for salva com sucesso, será retornado o código 201;
    
    } catch (erro) {
        console.log(erro)
    }
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
app.use(router.delete('/mulheres/:id', deletaMulher))
//srvidor ouve porta:
app.listen(porta, mostraPorta)
