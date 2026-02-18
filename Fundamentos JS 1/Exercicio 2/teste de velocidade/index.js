const carA = prompt ("Qual o nome do carro A?")
let speedA = prompt ("Qual a velocidade do carro A?")
const carB = prompt ("Qual o nome do carro B?")
let speedB = prompt ("Qual a velocidade do carro B?")

speedA = parseFloat(speedA)
speedB = parseFloat(speedB)

if (speedA > speedB) {
    alert (" O carro mais rápido é o " + carA + " com velocidade de " + speedA + "km/h")
} else if (speedB > speedA) {
    alert (" O carro mais rápido é o " + carB + " com velocidade de " + speedB + "km/h")
} else {
    alert (" Os dois carros tem a mesma velocidade de " + speedA + "km/h")
}

/*const veiculo1 = prompt("Informe o nome do primeiro veículo:")
const velocidade1 = parseFloat(prompt("Informe a velocidade do primeiro veículo:"))

const veiculo2 = prompt("Informe o nome do segundo veículo:")
const velocidade2 = parseFloat(prompt("Informe a velocidade do segundo veículo:"))


if (velocidade1 > velocidade2) {
  alert(veiculo1 + " é mais rápido do que " + veiculo2)
} else if (velocidade2 > velocidade1) {
  alert(veiculo2 + " é mais rápido do que " + veiculo1)
} else {
  alert(veiculo1 + " e " + veiculo2 + " possuem velocidades iguais.") 
} */
