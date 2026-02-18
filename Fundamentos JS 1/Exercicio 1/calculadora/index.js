let a
let b
let result

a = window.prompt("Insira o primeiro número")
b = window.prompt("Insira o segundo número")
result = parseFloat(a) + parseFloat(b)
alert(`O resultado da concatenação é: ` + result)
result = parseFloat(a) - parseFloat(b)
alert(`O resultado da subtração é: ` + result)
result = parseFloat(a) * parseFloat(b)
alert(`O resultado da multiplicação é: ` + result)
result = parseFloat(a) / parseFloat(b)
alert(`O resultado da divisão é: ` + result)

/*
const entrada1 = prompt("Informe o primeiro número:")
const entrada2 = prompt("Informe o segundo número:")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
  "Resultados:\n" +
  "\nSoma: " + soma +
  "\nSubtração: " + subtracao +
  "\nMultiplicação: " + multiplicacao +
  "\nDivisão: " + divisao
)
*/