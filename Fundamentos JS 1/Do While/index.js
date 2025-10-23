// Inicia a variável 'velocidade' com o valor 0
let velocidade = 0

/*
  Estrutura de repetição: do...while

  → O bloco dentro do "do" será executado pelo menos uma vez,
    mesmo que a condição do "while" seja falsa logo no início.

  → Sintaxe geral:
    do {
        // código a ser repetido
    } while (condição)
*/

do {
    // Mostra uma mensagem com a velocidade atual do veículo
    alert("A velocidade do veículo é " + velocidade + " km/h")

    // Diminui a velocidade em 20 km/h
    velocidade -= 20

    /*
      Importante:
      Como a velocidade começa em 0 e estamos subtraindo 20,
      a variável ficará negativa logo após a primeira execução.
      Isso fará com que a condição (velocidade > 0) seja falsa
      e o loop pare imediatamente.
    */
    
} while (velocidade > 0) // Enquanto a velocidade for maior que zero, repete o bloco acima

// Mostra a velocidade final quando o loop termina
alert("Velocidade final: " + velocidade + " km/h")
