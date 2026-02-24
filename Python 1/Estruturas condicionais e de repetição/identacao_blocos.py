def sacar(valor):
    saldo = 500
    if saldo >= valor:
        print("Saque realizado com sucesso!")
        print("Retire o seu dinheiro na boca do caixa.")
        return True
    else:
        print("Saldo insuficiente!")
        return False
sacar(100)