
let nome = prompt("Qual seu nome?");
let cidades = "";
let contador = 0;
let pergunta = prompt("Já visitou alguma cidade? (S/N)");

while (pergunta === "S") {
    let cidade = prompt("Qual cidade?");
    if (cidades === "") {
        cidades = cidade;
    } else {
        cidades = cidades + ", " + cidade;
    }
    contador = contador + 1;
    pergunta = prompt("Visitou outra cidade? (S/N)");
}

if (contador === 0) {
    alert(nome + ", você não visitou nenhuma cidade.");
} else {
    alert(nome + ", você visitou " + contador + " cidade(s): " + cidades);
}

/*
const turista = prompt("E aí, turista! Qual é o seu nome?")
let cidades = ""
let contagem = 0
let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?")
  cidades += " - " + cidade + "\n"
  contagem++
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(
  "Turista: " + turista +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
)


*/
