const vagas = []

function listarVagasDisponiveis() {
    if (vagas.length === 0) {
        alert("Não há vagas cadastradas.")
        return
    }

    let detalheVagas = "Vagas disponíveis:\n\n"

    for (let i = 0; i < vagas.length; i++) {
        const vaga = vagas[i]
        detalheVagas += (i + 1) + " . " + " | Nome: " + vaga.nomeVaga + " | Candidatos: " + vaga.quantCandidatos + "\n"
    }

    alert(detalheVagas)
}


function adicionarVaga() {
    const nomeVaga = prompt("Digite o nome da vaga:")
    const descricao = prompt("Digite a descrição da vaga:")
    const dataLimite = prompt("Digite a data limite (ex: dd/mm/aaaa):")

    const confirmacao = confirm(
        "Deseja salvar esta vaga?\n\n" +
        "Nome: " + nomeVaga + "\n" +
        "Descrição: " + descricao + "\n" +
        "Data limite: " + dataLimite
    )

    if (confirmacao) {
        const novaVaga = {
            nomeVaga,
            descricao,
            dataLimite,
            nomeCandidatos: [],
            quantCandidatos: 0
        }

        vagas.push(novaVaga)
        alert("Vaga adicionada com sucesso!")
    } else {
        alert("Cadastro cancelado.")
    }
}


function visualizarVaga() {
    if (vagas.length === 0) {
        alert("Não há vagas cadastradas.")
        return
    }

    let escolha = prompt("Digite o número da vaga que deseja consultar:")
    escolha = Number(escolha)

    if (isNaN(escolha) || escolha < 0 || escolha >= vagas.length) {
        alert("Vaga não existente!")
        return
    }

    const vaga = vagas[escolha]

    let detalhes = "Detalhes da vaga:\n\n"
    detalhes += "Nome: " + vaga.nomeVaga + "\n"
    detalhes += "Descrição: " + vaga.descricao + "\n"
    detalhes += "Data limite: " + vaga.dataLimite + "\n"
    detalhes += "Candidatos inscritos: " + vaga.quantCandidatos + "\n"
    if (vaga.nomeCandidatos.length > 0) {
        detalhes += "Lista de candidatos: " + vaga.nomeCandidatos.join(", ")
    }

    alert(detalhes)
}

function inscreverCandidatoVaga() {
    if (vagas.length === 0) {
        alert("Não há vagas cadastradas.")
        return
    }


    let listaVagas = "Vagas disponíveis:\n\n"
    for (let i = 0; i < vagas.length; i++) {
        listaVagas += i + " - " + vagas[i].nomeVaga + " (Candidatos: " + vagas[i].quantCandidatos + ")\n"
    }
    alert(listaVagas)


    let escolha = prompt("Digite o número da vaga para se inscrever:")
    escolha = Number(escolha)

    if (escolha < 0 || escolha >= vagas.length) {
        alert("Vaga não existente!")
        return
    }


    const candidato = prompt("Digite o nome do candidato:")
    vagas[escolha].nomeCandidatos.push(candidato)
    vagas[escolha].quantCandidatos++
    alert("Candidato inscrito com sucesso!")
}

function excluirVaga() {
    if (vagas.length === 0) {
        alert("Não há vagas cadastradas.")
        return
    }

    let listaVagas = "Vagas disponíveis:\n\n"
    for (let i = 0; i < vagas.length; i++) {
        listaVagas += i + " - " + vagas[i].nomeVaga + " (Candidatos: " + vagas[i].quantCandidatos + ")\n"
    }
    alert(listaVagas)


    let escolha = prompt("Digite o número da vaga que deseja excluir:")
    escolha = Number(escolha)

    if (isNaN(escolha) || escolha < 0 || escolha >= vagas.length) {
        alert("Vaga não existente!")
        return
    }


    vagas.splice(escolha, 1)
    alert("Vaga excluída com sucesso!")
}



function exibirMenu() {
    return prompt(
        "Bem-vindo!!\n\n Site de Vagas\n\n" +
        "1. Listar vagas disponíveis\n" +
        "2. Criar um nova vaga\n" +
        "3. Visualizar uma vaga\n" +
        "4. Inscrever um candidato em uma vaga\n" +
        "5. Excluir uma vaga\n" +
        "6. Sair\n"
    )
}



function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagasDisponiveis()
                break
            case "2":
                adicionarVaga()
                break
            case "3":
                visualizarVaga()
                break
            case "4":
                inscreverCandidatoVaga()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida!")
                break
        }
    } while (opcao !== "6");
}

executar()