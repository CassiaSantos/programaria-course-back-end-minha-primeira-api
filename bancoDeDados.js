//Traz mongoose para dentro do meu proejto.
const mongoose = require('mongoose')

async function conectaBancoDeDados() {
    try {
        console.log("A conexão com banco de dados iniciou")

        //espera e conecta com o banco de dados. Enquanto espera, JS resolve demais requisições:
        await mongoose.connect('mongodb+srv://cassiasantos:myfirstapi@cluster-mulhres-in-tech.xc3ppyf.mongodb.net/?retryWrites=true&w=majority&appName=cluster-mulhres-in-tech')

        console.log("Conexão com banco de dados realizada com sucesso!")
    } catch(erro) {
        console.log(erro)
    }
}

//exporta a função para ser usada em demais arquivos:
module.exports = conectaBancoDeDados