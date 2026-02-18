let saldo = parseFloat(prompt("Dinheiro inicial: "));
let opcao;

do {
    opcao = prompt(
        "Saldo na conta: R$" + saldo + "\n1)Adicionar \n2)Sacar \n3)Sair"
    );
    switch (opcao) {
        case "1":
            let add = parseFloat(prompt("Quantidade desejada: "));
            saldo = saldo + add;
            break;

        case "2":
            let sub = parseFloat(prompt("Quantidade desejada: "));
            saldo = saldo - sub;
            break;

        case "3":
            alert("Saldo: R$" + saldo + "\nEncerrando programa...");
            opcao = "3";
            break;

        default:
            alert("Opção inválida!");
            break;
    }
} while (opcao !== "3");

/*
let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"))
let opcao = ""

do {
  opcao = prompt(
    "Saldo disponível: R$ " + saldo +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
      break
    case "2":
      saldo -= prompt("Informe o valor a ser removido:")
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Entrada inválida.")
      break
  }
} while (opcao !== "3");
*/
