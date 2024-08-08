//"Mulher" será usado toda vez que me referir ao banco de dados no MONGO DB:

// ------------- alteração no mulheres JS - GET: -----------------
//feat: salvando dados no banco de dados
//APAGA DA MULHERES JS

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



//cria variável para recuperar dados do Model --> toda vez que me referir ao banco de dados no MONGO DB:
const Mulher = require('./mulherModel')


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


// ------------- alteração no mulheres JS - POST: -----------------
//feat: salvando mulher no banco de dados

//DELETA:
//biblioteca UUID:
const{v4:uuidv4} = require('uuid')

//A lista inicial não existe mais então não é mais necessário isso:
//dados da nova mulher é inserida na lista de mulheres: 
mulheres.push(NovaMulher)


    //retorna lista atualizada:
    response.json(mulheres)//deleta pois a partir de agora os dados estão atrelados ao banco de dados

//ACRESCENTA:

//MODIFICA:
//POST - função para criar mulher
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

// ------------- alteração no mulheres JS - PATCH: -----------------
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)//encontra mulher pela URL da requisição

        // se alguém preencher o campo nome, o mesmo será sobrescrito:
        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome
        }
    
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }
    
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }
        
        if (request.body.citacao) {
            mulherEncontrada.citacao = request.body.citacao
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados)

    } catch (erro) {
        console.log(erro)
    }
}

// ------------- alteração no mulheres JS - PATCH: -----------------
//feat: deletando dados no banco de dados
//para se comunicar com um serviço externo, utiliza-se o JS assíncrono para que o sertviço e outros recursos sejam carregados ao mesmo tempo: palavra reservada "async"
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({message: 'Diva Tech deletada com sucesso!'})
    } catch (erro) {
        console.log(erro)
    }
}