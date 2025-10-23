let nome = "Ylgner"

console.log(nome) //para exibir no console do navegador
console.error(nome) // para exibir como mensagem de erro
console.warn(nome) // para exibir como aviso

window.alert(nome) //exibe uma caixa como alerta no navegador
nome = window.prompt("Insira o seu nome") 
//serve para usuario digitar
//da para atribuir em uma variavel

let confirmacao = window.confirm("confirma esta ação?")
//serve para usuario confirmar algo no sim ou nao
//da para atribuir em uma variavel

//window é o objeto global no navegador, ou seja, não preciso botar o window. antes
// posso abreviar, exemplo: alert("olá, mundo"), prompt("olá")

document //faz referencia para a página html