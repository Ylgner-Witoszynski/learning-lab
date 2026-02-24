number_1 = int(input("Digite o primeiro número: "))
number_2 = int(input("Digite o segundo número: "))

if number_1 > number_2:
    print(f"O maior número é: {number_1}")
elif number_2 > number_1:
    print(f"O maior número é: {number_2}")
else:
    print("Os números são iguais.")