contador = 0
soma = 0

number = int(input("Digite um número: "))

while number != 0:
    soma += number
    contador += 1
    
    number = int(input("Digite um número: "))

print("Quantidade digitada:", contador)
print("Soma:", soma)