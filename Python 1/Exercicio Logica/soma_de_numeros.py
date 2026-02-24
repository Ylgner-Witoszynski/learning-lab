number = int(input("Digite um número inteiro: "))
soma = 0

for numero in range(1, number + 1):
    if numero % 2 == 0:
        soma += numero

print(soma)