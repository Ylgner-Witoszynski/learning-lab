numb_fatorial = int(input("Digite um número para calcular o fatorial: "))

fatorial = 1

for i in range(1, numb_fatorial + 1):
    fatorial *= i

print(f"O fatorial de {numb_fatorial} é {fatorial}")