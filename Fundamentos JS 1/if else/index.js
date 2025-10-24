// Solicitando ao usuário que informe sua idade.
// A função prompt exibe uma caixa de diálogo e retorna o valor digitado como string.
const idade = prompt("Informe a sua idade:")

// A estrutura condicional "if" verifica uma condição (verdadeira ou falsa)
// e executa um bloco de código se essa condição for verdadeira.
if (idade > 18) {
  alert("Você é maior de idade") // Exibe uma mensagem se a idade for maior que 18
}

// O "else if" é usado para testar uma nova condição se a anterior for falsa.
else if (idade > 12) {
  alert("Você é menor de idade") // Executa se idade for entre 13 e 18
}

// Podemos encadear quantos "else if" forem necessários.
else if (idade > 4) {
  alert("Você é criança") // Executa se idade for entre 5 e 12
}

// O "else" é executado se nenhuma das condições anteriores for verdadeira.
else {
  alert("Idade muito baixa para ser classificada!") // Exibe uma mensagem padrão
}

// -------------------------------------------
// Exemplo extra: Operador Ternário
// -------------------------------------------
// O operador ternário é uma forma simplificada do "if/else".
// Ele segue o formato: condição ? valor_se_verdadeiro : valor_se_falso

// Exemplo:
const resultado = (6 === 6) ? "Verdadeiro" : "Falso"

// Exibe o resultado no console
console.log(resultado)
