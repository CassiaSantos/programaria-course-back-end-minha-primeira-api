const express = require("express");
//definição de rota através da função Router() fornecida pelo Express:
const router = express.Router();
const app = express();

const porta = 3333;

//Fyunção que envia uma mensagem que será renderizada no browser:
function exibirMensagem(request, response){
    response.send("Olá, mundo");
}

//configurado rota para a exibição da mensagem na função exibirMensagem()
app.use(router.get('/mensagem', exibirMensagem));
app.listen(porta, mostraPorta);