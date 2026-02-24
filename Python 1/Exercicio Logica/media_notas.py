notas = int(input("Digite a quantidade de notas: "))
soma = 0

for i in range(notas):
    nota = float(input("Digite a nota: "))
    soma += nota

media = soma / notas

print(f"A média das notas é: {media}")

if media >= 6:
    print("Aprovado")
elif media >= 5:
    print("Recuperação")


