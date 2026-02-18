let palavra = prompt("Digite uma palavra para consulta:");
let invertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    invertida += palavra[i];
}

if (palavra === invertida) {
    alert("A palavra '" + palavra + "' é um palíndromo!");
} else {
    alert("A palavra '" + palavra + "' NÃO é um palíndromo.\n" +
        "Normal: " + palavra + "\nInvertida: " + invertida);
}

/*
const palavra = prompt("Informe uma palavra:")
let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo!")
} else {
  alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)
}
*/