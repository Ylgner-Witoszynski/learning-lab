nome = "Ylgner"
idade = 24
profissao = "Programador"
linguagem = "Python"

print("Nome: %s Idade: %d" % (nome, idade))
print("Nome: {} Idade: {}".format(nome, idade))
print(f"Nome: {nome} Idade: {idade}")
print(f"Nome: {nome} Idade: {idade} Profissão: {profissao} Linguagem: {linguagem}")
print("")

dados = {"nome": nome, "idade": idade, "profissao": profissao, "linguagem": linguagem}