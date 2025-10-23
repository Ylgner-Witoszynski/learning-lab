let medida = parseFloat(prompt("Indique uma medida em metros: "))
let Escolha = prompt("Escolha qual medida você quer converter:\nA)milímetro \nB)centímetro \nC)decímetro \nD)decâmetro \nE)hectômetro \nF)quilômetro")
let resultado

resultadoNumerico = parseFloat(resultado)

switch (Escolha) {
  case "A":
  resultadoNumerico = medida * 1000
  alert ("Metros: " + medida + " = milímetro " + resultadoNumerico )
  break;

  case "B":
  resultadoNumerico = medida * 100
  alert ("Metros: " + medida + " = centímetro " + resultadoNumerico )
  break;

  case "C":
  resultadoNumerico = medida * 10
  alert ("Metros: " + medida + " = decímetro " + resultadoNumerico )
  break;

  case "D":
  resultadoNumerico = medida / 10
  alert ("Metros: " + medida + " = decâmetro " + resultadoNumerico )
  break;

  case "E":
  resultadoNumerico = medida / 100
  alert ("Metros: " + medida + " = hectômetro " + resultadoNumerico )
  break;

  case "F":
  resultadoNumerico = medida / 1000
  alert ("Metros: " + medida + " = quilômetro " + resultadoNumerico )
  break;

  default:
  alert ("Opção inválida" )
  break;

}

/*
const medida = parseFloat(prompt("Insira uma medida em metros:"))

const unidade = prompt(
  "Para qual unidade de medida deseja converter?" +
  "\n1 - milímetros (mm)" +
  "\n2 - centímetros (cm)" +
  "\n3 - decímetros (dm)" +
  "\n4 - decâmetros (dam)" +
  "\n5 - hectômetro (hm)" +
  "\n6 - quilômetro (km)"
)

switch (unidade) {
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
    break
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
    break
  case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
    break
  case "4":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
    break
  case "5":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
    break
  case "6":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
    break
  default:
    alert("Opção inválida!")
    break
}

*/
