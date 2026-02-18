const lista = []
let opcao = ""

do {
    let imovel = ""
    for (let i = 0; i < lista.length; i++) {
        imovel += (i + 1) + "º - " + lista[i] + "\n"
    }

    opcao = prompt("Bem-vindo!!" +
        "Imóveis:\n" + imovel +
        "\nEscolha uma ação:\n1 - Novo Imóvel\n2 - Imóveis Registrados\n3 - Sair"
    )

    switch (opcao) {
        case "1":
            const novoImovel = {}
            novoImovel.prop = prompt("Digite o nome do proprietário: ")
            novoImovel.quartos = prompt("Digite a quantidade de quartos: ")
            novoImovel.banheiros = prompt("Digite a quantidade de banheiros: ")
            novoImovel.garagem = prompt("Possui garagem?(S/N) ")
            lista.push(novoImovel.prop)
            break

        case "2":
            if (lista.length === 0) {
                alert("Não há imóveis cadastrados!");
            } else {
                let texto = "Imóveis cadastrados:\n";
                for (let i = 0; i < lista.length; i++) {
                    const im = lista[i];
                    texto += (i + 1) + "º - " + im.prop + ", " + im.quartos + " quartos, " + im.banheiros + " banheiros, garagem: " + im.garagem + "\n";
                }
                alert(texto);
            }
            break

        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
    }

} while (opcao !== "3");

/*

No script, vamos começar criando um array para salvar os imóveis, uma variável para a opção do menu e o do while:

const imoveis = []
let opcao = ""

do {
  
} while (opcao !== "3");




Depois podemos adicionar o prompt que mostra o menu:

const imoveis = []
let opcao = ""

do {
  opcao = prompt(
    "Bem-vindo ao Cadastro de Imóveis.\nTotal de imóveis: " + imoveis.length +
    "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  )

} while (opcao !== "3");




Agora podemos incluir um switch com cases para cada opção:JavaScriptCopiar

const imoveis = []
let opcao = ""

do {
  opcao = prompt(
    "Bem-vindo ao Cadastro de Imóveis.\nTotal de imóveis: " + imoveis.length +
    "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  )

  switch (opcao) {
    case "1":
      
      break
    case "2":
      
      break
    case "3":
      
      break
    default:
      
      break
  }
} while (opcao !== "3");




No case 1, podemos começar criando um objeto e utilizando o prompt para salvar cada uma de suas propriedades:

// ...

  switch (opcao) {
    case "1":
      const imovel = {}

      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
      imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"))
      imovel.banheiros = parseFloat(prompt("Quantos banheiros possui o imóvel?"))
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

      break
    case "2":
      
      break

// ...




Depois podemos mostrar a confirmação perguntando se o usuário deseja salvar aquele imóvel e exibindo as informações digitadas:

// ...

  switch (opcao) {
    case "1":
      const imovel = {}

      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
      imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"))
      imovel.banheiros = parseFloat(prompt("Quantos banheiros possui o imóvel?"))
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

      const confirma = confirm(
        "Salvar este imóvel?\n" +
        "\nProprietário: " + imovel.proprietario +
        "\nQuartos: " + imovel.quartos +
        "\nBanheiros: " + imovel.banheiros +
        "\nPossui Garagem? " + imovel.garagem
      )

      break
    case "2":
      
      break

// ...




Por fim, só precisamos dar um push para salvar o imóvel no array:

// ...

  switch (opcao) {
    case "1":
      const imovel = {}

      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
      imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"))
      imovel.banheiros = parseFloat(prompt("Quantos banheiros possui o imóvel?"))
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

      const confirma = confirm(
        "Salvar este imóvel?\n" +
        "\nProprietário: " + imovel.proprietario +
        "\nQuartos: " + imovel.quartos +
        "\nBanheiros: " + imovel.banheiros +
        "\nPossui Garagem? " + imovel.garagem
      )

      if (confirma) {
        imoveis.push(imovel)
      }
      break
    case "2":
      
      break

// ...




No case 2, vamos simplesmente criar um FOR para iterar sobre o array de imóveis e exibir cada um deles em um alert:

// ...

    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " + (i + 1) +
          "\nProprietário: " + imoveis[i].proprietario +
          "\nQuartos: " + imoveis[i].quartos +
          "\nBanheiros: " + imoveis[i].banheiros +
          "\nPossui Garagem? " + imoveis[i].garagem
        )
      }
      break
    case "3":
      
      break
    default:
      
      break
  }
} while (opcao !== "3");




Para encerrar, no case 3 e no default só precisamos adicionar um alert com as mensagens apropriadas e um break:

// ...

    case "3":
      alert("Saindo...")
      break
    default:
      alert("Opção inválida!")
      break
  }
} while (opcao !== "3");

*/