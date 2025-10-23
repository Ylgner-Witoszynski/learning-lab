// Estrutura geral do for:
// for (inicialização; condição; finalização) {
//     // código a ser repetido
// }

// Exemplo 1: Contando de 0 até 10
for (let indice = 0; indice <= 10; indice++) {
  // Mostra o valor atual do índice em um alerta
  alert("Índice = " + indice)

  // O loop começa com indice = 0
  // Enquanto indice for menor ou igual a 10, o bloco será executado
  // Ao final de cada repetição, indice++ soma 1 ao valor atual
}

// --------------------------------------------------------------------

// Exemplo 2: Percorrendo uma string letra por letra
let nome = "Ylgner" // O nome tem 6 caracteres (índices: 0 a 5)

// O loop vai do índice 0 até o último caractere (nome.length - 1)
for (let indice = 0; indice < nome.length; indice++) {
  console.log("Letra na posição " + indice + " = " + nome[indice])

  // nome[indice] acessa a letra correspondente à posição atual
  // Exemplo: nome[0] → 'Y', nome[1] → 'l', e assim por diante
}
