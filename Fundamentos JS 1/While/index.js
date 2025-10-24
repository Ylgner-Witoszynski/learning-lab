// Declaramos uma variável chamada "velocidade" e atribuímos o valor inicial de 80.
let velocidade = 80

// O laço "while" será executado ENQUANTO a condição (velocidade > 0) for verdadeira.
while (velocidade > 0) {

    // Exibe um alerta mostrando a velocidade atual do carro.
    alert("O carro está a " + velocidade + " km/h")

    // A cada repetição, diminuímos a velocidade em 20 km/h.
    velocidade -= 20
    alert("Diminuindo 20 km/h")

    // Quando a velocidade for exatamente 40 km/h, usamos "break" para encerrar o laço.
    if (velocidade === 40) {
        alert("Alcançou 40 km/h! Interrompendo o loop com 'break'.")
        break // Sai imediatamente do laço "while".
    }
}

// Quando o laço termina (por atingir 0 ou pelo break), mostramos a mensagem final.
alert("O carro parou.")
