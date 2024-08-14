/** Sobre o repositório:
 * Curso: Back-end - Minha Primeira API
 * Instituição de ensino: Programaria 
 * Desenvolvedora: Cássia Oliveira dos Santos 👩‍💻
 * GitHub: https://github.com/CassiaSantos/
**/

function mostraHora(request, response) {
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
    response.send(hora)
}
   
function mostraPorta() {
    console.log(`Servidor criado e rodando na porta ${PORTA}`)
   
}
   
app.use(router.get('/hora', mostraHora))
app.listen(PORTA, mostraPorta)