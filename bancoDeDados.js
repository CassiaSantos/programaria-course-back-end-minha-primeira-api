/** Sobre o repositório:
 * Curso: Back-end - Minha Primeira API
 * Instituição de ensino: Programaria 
 * Desenvolvedora: Cássia Oliveira dos Santos 👩‍💻
 * GitHub: https://github.com/CassiaSantos/
**/

//Traz mongoose para dentro do meu proejto.
const mongoose = require('mongoose')
//traz dotenv para o projeto e chama a função config() para que seja possível conectar com o banco de dados:
require('dotenv').config()

async function conectaBancoDeDados() {
    try {
        console.log("A conexão com banco de dados iniciou")

        //espera e conecta com o banco de dados. Enquanto espera, JS resolve demais requisições:
        //connect é a abstração do mongoose para conectar com o banco de dados:
        await mongoose.connect(process.env.MONGO_URL) //string de banco de dados será repassada nesta linha pelo dotenv;

        console.log("Conexão com banco de dados realizada com sucesso!")
    } catch(erro) {
        console.log(erro)
    }
}

//exporta a função para ser usada em demais arquivos:
module.exports = conectaBancoDeDados