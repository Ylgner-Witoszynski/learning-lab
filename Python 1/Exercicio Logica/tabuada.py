number = int(input("Digite um número inteiro: "))
tabuada = 1

for tabuada in range(1, 11):
    resultado = number * tabuada
    print(f"{number} x {tabuada} = {resultado}")
    tabuada += 1
    if tabuada <= 10:
        continue
    else:
        break
    
