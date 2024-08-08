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



//cria variável para recuperar dados do Model:
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