// Solicita os números ao usuário
const primeiroNumero = parseFloat(prompt("Digite o primeiro número:"))
const segundoNumero = parseFloat(prompt("Digite o segundo número:"))

// Realiza as operações matemáticas básicas
const soma = primeiroNumero + segundoNumero
const subtracao = primeiroNumero - segundoNumero
const multiplicacao = primeiroNumero * segundoNumero
const divisao = primeiroNumero / segundoNumero

// Exibe os resultados formatados
alert(
  "📊 Resultados das Operações:\n\n" +
  "Soma: " + soma + "\n" +
  "Subtração: " + subtracao + "\n" +
  "Multiplicação: " + multiplicacao + "\n" +
  "Divisão: " + divisao
)
