# Back-end - Minha Primeira API - Programaria 
### Desenvolvedora: Cássia Oliveira dos Santos 👩‍💻
### GitHub: https://github.com/CassiaSantos/
### Ano: 2024

## Sobre o repositório 🚀
Esse repositório tem como objetivo armazenar minhas produções e API desenvolvida durante o curso "Back-end | Minha Primeira API" da empresa educacional Programaria. 

Essa API tem como objetivo receber informações sobre uma mulher da área de tecnologia submetidas através de um formulário no front-end, armazená-las no banco de dados NoSQL Mongo DB e em seguida renderizar os dados no front-end.

As informações recebidas são:
* Nome;
* Imagem;
* Mini biografia; e
* Citação.

## Modelo de cadastro da Diva pelo Insomnia:
#### considerações:
* Utilize o método POST;
* A entrada de dados é no formato JSON;
```
{
  "nome": "nome da Diva Tech",
  "imagem": "URL da imagem aqui",
  "citacao": "A citação da diva vai aqui",
  "minibio": "escreva aqui um resumo da bigrafia da Diva Tech"
}
```

### Listagem da Diva pelo Insomnia:
#### considerações:
* Utilize o método GET;
* Os dados são retornados no formato JSON;

### Atualização da Diva pelo Insomnia:
1. Liste as mulheres cadastradas no banco de dados;
2. Copie o ID da mulher que deseja alterar;
3. Troque para o método PATCH;
4. Cole o id da copiado após a ```.../mulheres/``` na URL de caminho do servidor. Exemplo: ```www.localhost:333/mulheres/123456789```
5. Clique no botão "Enviar" ou "Send";
6. Altere os dados que deseja envie a requisição novamente.

### Deleção da Diva pelo Insomnia:
1. Liste as mulheres cadastradas no banco de dados;
2. Copie o ID da mulher que deseja deletar;
3. Troque para o método DELETE;
4. Cole o id da mulher copiado após a ```.../mulheres/``` na URL de caminho do servidor. Exemplo: ```www.localhost:333/mulheres/123456789```
5. Clique no botão "Enviar" ou "Send" e a lista atualizada será retornada;


## Anotações úteis: 😎
### Instalação de programas 💻
- Node JS: https://nodejs.org/en/download/prebuilt-installer/current
- Insomnia: https://insomnia.rest/download

### Sites: 🌍
- Mongo DB: https://cloud.mongodb.com/
  
### Comandos para instalações de pacotes com npm: ⚙️
``` npm init -y```

``` npm install express ``` - para instalar o pacote express;

```npm install uuid``` - para instalar o UUID e permitir geração de ids únicos e automáticos;

``` npm install mongoose ``` - pacote necessário para usar o Mongo DB;

``` npm install dotenv ``` - pacote express que cria variáveis de ambiente - necessário para proteger dados de configurações sensíveis;

``` npm install cors ``` - pacote express que faz a liberação de CORS para que seja possível consumir a API no front-end;

### Pilares do Pensamento Computacional: 🧠
* Decomposição: dividir o problema em partes menores;
* Abstração: nomear conceitos
* Padrão: reconhecer padrões nas informações;
* Algoritmos: criar um passo a passo lógico para resolver problemas; 
