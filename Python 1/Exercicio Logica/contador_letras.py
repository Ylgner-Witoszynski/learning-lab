palavra = str(input("Digite uma palavra: "))
letra = "aA"
contador = 0

for i in palavra:
    if i in letra:
        contador += 1

print(f"Existem {contador} letras na palavra {palavra}")
