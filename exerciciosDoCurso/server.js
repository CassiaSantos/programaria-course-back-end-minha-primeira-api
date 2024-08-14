/** Sobre o repositório:
 * Curso: Back-end - Minha Primeira API
 * Instituição de ensino: Programaria 
 * Desenvolvedora: Cássia Oliveira dos Santos 👩‍💻
 * GitHub: https://github.com/CassiaSantos/
**/

const express = require("express");
const app = express();

const porta = 3333;

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
}
//configurado rota para a exibição da mensagem na função exibirMensagem()
app.use(router.get('mensagem', e));
app.listen(porta, mostraPorta);