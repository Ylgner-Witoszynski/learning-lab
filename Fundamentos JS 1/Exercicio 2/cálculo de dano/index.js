const P1 = prompt("Qual o nome do seu personagem?");
let Ataque = prompt("Qual o valor do seu ataque?");
const P2 = prompt("Qual o nome do inimigo?");
let Defesa = prompt("Qual o valor da defesa do inimigo?");
let Vida = prompt("Qual o valor da vida do inimigo?");
const Escudo = prompt("O inimigo possui escudo? (Sim/Não)");

Ataque = parseFloat(Ataque);
Vida = parseFloat(Vida);
Defesa = parseFloat(Defesa);

if (Escudo === "Sim") {
  if (Ataque > Defesa) {
    Vida -= Ataque - Defesa / 2;
    alert(
      P1 + " causou " + (Ataque - Defesa / 2) + " de dano em " + P2
    );
    alert(P2 + " agora possui " + Vida + " de vida");
  } else {
    alert(P1 + " não conseguiu causar dano em " + P2);
    alert(P2 + " possui " + Vida + " de vida");
    }  
} else if (Escudo === "Não") {
    if (Ataque > Defesa) {
        Vida -= Ataque - Defesa;
        alert(
          P1 + " causou " + (Ataque - Defesa) + " de dano em " + P2
        );
        alert(P2 + " agora possui " + Vida + " de vida");
      } else {
        alert(P1 + " não conseguiu causar dano em " + P2);
        alert(P2 + " possui " + Vida + " de vida");
      } 
} else {
    alert("Resposta inválida, por favor responda com Sim ou Não");
}

alert( P1 + " possui " + Ataque + " de ataque\n"+
    P2 + " possui " + Defesa + " de defesa\n" + 
    P2 + " possui " + Vida + " de vida"
);

/*
const atacante = prompt("Qual é o nome do personagem atacante?")
const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"))
const defensor = prompt("Qual é nome do personagem defensor?")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
  danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)
*/

