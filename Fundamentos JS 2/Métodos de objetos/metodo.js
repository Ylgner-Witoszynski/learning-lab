let pessoa = {
  nome: "Ylgner",
  idade: 24,
  dizerOla() {
    console.log("Olá, mundo! Meu nome é " + this.nome)
  }
}

console.log(pessoa)

pessoa.dizerOla()