senha = 1234
tentativas = 3
contador_tentativas = 0

while contador_tentativas < tentativas:
    senha_digitada = int(input("Digite a senha: "))
    
    if senha_digitada == senha:
        print("Acesso permitido!")
        break
    else:
        print("Senha incorreta. Tente novamente.")
        contador_tentativas += 1
        