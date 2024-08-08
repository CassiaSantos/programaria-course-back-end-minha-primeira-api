// ------------- alteração no mulheres JS: -----------------

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
