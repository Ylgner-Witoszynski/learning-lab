opcao = -1

while opcao != 0:
    opcao = int(input("[1] Par ou Ímpar\n[2] Ano Bissexto\n[3] Tabuada\n[0] Sair\n"))

    if opcao == 1:
        print("Exibindo o Par ou Ímpar...")
    elif opcao == 2:
        print("Exibindo o Ano Bissexto...")
    elif opcao == 3:
        print("Exibindo a tabuada...")
else:
    print("Obrigado por usar nosso sistema, até logo!")
    