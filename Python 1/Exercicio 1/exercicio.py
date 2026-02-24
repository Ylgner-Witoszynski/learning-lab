palavra = input("Digite uma palavra: ")

print("\nImprimindo letra por letra:")
for letra in palavra:
    print(letra, end=", ")

#ler letras de trás para frente
print("\n\nImprimindo de trás para frente:")
for letra in palavra[::-1]:
    print(letra, end=", ")
