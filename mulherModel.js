/** Sobre o repositório:
 * Curso: Back-end - Minha Primeira API
 * Instituição de ensino: Programaria 
 * Desenvolvedora: Cássia Oliveira dos Santos 👩‍💻
 * GitHub: https://github.com/CassiaSantos/
**/

//Ao fazer o fork do projeto, terá que criar e cofigurar seu próprio banco de dados.

//Traz mongoose para dentro do projeto:
const mongoose = require('mongoose')
const { type } = require('os')

//definição do schema:

const mulherSchema = new mongoose.Schema({
    nome: {              
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    citacao: {
        type: String,
        required: true
    },
    minibio: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('diva', mulherSchema)//o nome da coleção no mongo DB será "divas"
