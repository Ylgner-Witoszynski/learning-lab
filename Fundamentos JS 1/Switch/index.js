/*
🧩 Estrutura Condicional: switch

O switch é usado quando queremos comparar uma variável com várias opções possíveis (casos),
sem precisar escrever vários "if" e "else if".
*/

// Exibe uma caixa para o usuário digitar uma opção
const resultado = prompt(
  "Escolha uma alternativa:\n a) Opção A\n b) Opção B\n c) Opção C"
)

// O valor digitado pelo usuário é comparado abaixo
// 👇 Importante: o valor do "switch" deve ser a variável "resultado"
switch (resultado) {
  case "a":
    alert("Você escolheu a alternativa 'a'.")
    break // ⛔ Impede que o código continue executando os outros casos

  case "b":
    alert("Você escolheu a alternativa 'b'.")
    break

  case "c":
    alert("Você escolheu a alternativa 'c'.")
    break

  default:
    // ⚠️ Executado quando nenhuma das opções acima for escolhida
    alert("Alternativa inválida! Tente novamente.")
    break
}

/*
📘 Variação numérica (exemplo didático):

Se quisermos que o usuário digite um número ao invés de uma letra,
podemos converter o valor usando parseInt() ou parseFloat().

Exemplo:

const escolha = parseInt(prompt("Escolha uma opção:\n1) Opção A\n2) Opção B\n3) Opção C"))

switch (escolha) {
  case 1:
    alert("Você escolheu a opção 1 - A.")
    break
  case 2:
    alert("Você escolheu a opção 2 - B.")
    break
  case 3:
    alert("Você escolheu a opção 3 - C.")
    break
  default:
    alert("Opção inválida.")
}
*/
