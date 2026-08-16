# 🟡 Exercício 05 — Página de Produto

## 🎯 Objetivo

Criar uma **página de produto completa utilizando apenas HTML5**, aplicando os conhecimentos adquiridos nos exercícios anteriores e pesquisando novos elementos quando necessário.

Neste exercício, você vai começar a trabalhar com uma estrutura mais próxima de uma página real.

> ⚠️ **Não utilize CSS nem JavaScript.**
> O objetivo continua sendo praticar **HTML e semântica**.

---

## 📋 Cenário

Você foi contratado para criar a página de apresentação de um produto de uma empresa fictícia chamada **TechStore**.

O produto será um **notebook voltado para estudantes e desenvolvedores**.

Sua página deverá apresentar informações suficientes para que uma pessoa consiga conhecer o produto e decidir se deseja comprá-lo.

---

# 🏗️ Estrutura obrigatória

## 1. Cabeçalho

Crie um `<header>` contendo:

- Nome da empresa: **TechStore**
- Nome ou slogan da loja
- Um menu de navegação utilizando `<nav>`
- Links para as seguintes áreas:

- Início
- Produto
- Especificações
- Avaliações
- Dúvidas
- Contato

Os links devem funcionar utilizando **âncoras internas (`#id`)**.

---

## 🛍️ 2. Apresentação do produto

Crie uma seção para apresentar o produto.

Ela deve conter:

- Nome do produto
- Uma descrição curta
- Uma imagem
- Texto alternativo adequado para a imagem
- Preço
- Informação sobre parcelamento
- Informação sobre disponibilidade

Exemplo de informações que você pode inventar:

**TechBook Pro 15**

> Notebook desenvolvido para estudantes e profissionais de tecnologia.

Você pode criar **suas próprias especificações e preços**.

---

## 💻 3. Especificações técnicas

Crie uma seção chamada **Especificações**.

Organize as informações utilizando uma **tabela HTML**.

A tabela deverá possuir pelo menos:

- Processador
- Memória RAM
- Armazenamento
- Tela
- Sistema operacional
- Peso
- Bateria

Utilize corretamente:

- `<table>`
- `<thead>`
- `<tbody>`
- `<tfoot>`
- `<tr>`
- `<th>`
- `<td>`

### 🔎 Desafio extra

Pesquise como utilizar o atributo:

`scope`

nos elementos `<th>`.

Descubra para que ele serve e aplique-o corretamente na sua tabela.

---

## ⭐ 4. Avaliações

Crie uma seção chamada **Avaliações dos clientes**.

Adicione pelo menos **3 avaliações fictícias**.

Cada avaliação deve possuir:

- Nome do cliente
- Nota
- Comentário
- Data da avaliação

Você pode utilizar elementos como:

- `<article>`
- `<time>`

### 🔎 Desafio

Pesquise uma maneira semântica de representar uma **nota ou avaliação numérica** em HTML.

Você não precisa necessariamente encontrar uma tag específica para "estrelas".

A ideia é pesquisar e decidir qual estrutura faz mais sentido.

---

## ❓ 5. Perguntas frequentes

Crie uma seção chamada **Dúvidas frequentes**.

Utilize:

- `<details>`
- `<summary>`

Crie pelo menos **5 perguntas**.

Exemplos:

- O produto possui garantia?
- Qual é o prazo de entrega?
- É possível aumentar a memória RAM?
- O produto acompanha carregador?
- Qual sistema operacional está instalado?

Você deve escrever as respostas.

---

## 📦 6. Informações de entrega

Crie uma seção explicando:

- Prazo de entrega
- Regiões atendidas
- Política de devolução
- Garantia

Utilize listas quando fizer sentido.

### 🔎 Desafio

Pesquise a diferença entre:

- `<ol>`
- `<ul>`
- `<dl>`

Depois, escolha **pelo menos um lugar da página** onde você poderia utilizar uma `<dl>` de maneira adequada.

> Não use `<dl>` apenas para cumprir o requisito. Escolha um caso em que ela realmente faça sentido.

---

## 🛒 7. Formulário de compra

Crie um formulário para simular uma compra.

O formulário deverá possuir:

### Dados do cliente

- Nome
- E-mail
- Telefone

### Endereço

- CEP
- Rua
- Número
- Complemento
- Cidade
- Estado

### Produto

- Produto
- Quantidade
- Forma de pagamento

Para forma de pagamento, utilize pelo menos:

- Cartão de crédito
- Pix
- Boleto

Utilize os elementos apropriados de formulário.

---

## 🔎 8. Pesquise novos tipos de input

Você já conhece alguns tipos de `<input>`.

Agora pesquise outros tipos e utilize **pelo menos 3 que você ainda não tenha utilizado nos exercícios anteriores**.

Algumas possibilidades para pesquisar:

- `tel`
- `number`
- `url`
- `month`
- `color`
- `range`
- `search`

**Não copie simplesmente uma lista pronta.**

Pesquise:

`HTML input types MDN`

e escolha os que realmente fazem sentido para sua página.

---

## 📸 9. Galeria do produto

Crie uma pequena galeria com pelo menos **3 imagens** do produto.

Cada imagem deve possuir:

- `<img>`
- `alt` descritivo

Organize as imagens utilizando HTML semântico.

### 🔎 Desafio

Pesquise:

- `<figure>`
- `<figcaption>`

e avalie se faz sentido utilizar esses elementos na sua galeria.

---

## 🎥 10. Conteúdo multimídia

Adicione pelo menos:

- 1 vídeo relacionado ao produto ou à tecnologia
- 1 áudio ou outro conteúdo multimídia

Você pode utilizar:

- `<video>`
- `<audio>`
- `<iframe>`

Se utilizar conteúdo externo, dê preferência a uma incorporação apropriada.

---

## 📞 11. Rodapé

Crie um `<footer>` contendo:

- Nome da empresa
- Ano
- Link para contato
- Link para política de privacidade
- Link para termos de uso
- Link para voltar ao topo

Os links devem funcionar.

---

# 🔬 Desafio de pesquisa

Agora vem uma parte **muito importante** deste exercício.

Você deverá pesquisar **pelo menos 3 elementos ou atributos HTML que ainda não utilizou nos exercícios anteriores**.

Não vou dizer quais.

A ideia é você procurar algo que faça sentido para a página.

Para cada elemento/atributo novo utilizado, coloque um comentário no código:

`<!-- Pesquisei sobre o elemento X e descobri que ele serve para... -->`

Isso vai me permitir saber **o que você pesquisou por conta própria** quando eu corrigir seu exercício.

---

# 🚫 Regras

## Não utilizar:

- ❌ CSS
- ❌ JavaScript
- ❌ Bootstrap
- ❌ Frameworks
- ❌ Bibliotecas externas para criar componentes HTML

## Pode utilizar:

- ✅ HTML5
- ✅ Links externos
- ✅ Imagens externas
- ✅ Vídeos externos
- ✅ Documentação
- ✅ Pesquisa na internet
- ✅ Elementos HTML que você ainda não conhece

---

# 🧠 Regra principal do exercício

**Você não precisa saber fazer tudo antes de começar.**

Se encontrar algo que não sabe:

1. Identifique o que você precisa fazer.
2. Pesquise.
3. Leia pelo menos uma fonte confiável.
4. Tente implementar sozinho.
5. Teste no navegador.
6. Se não funcionar, pesquise novamente.
7. Só depois peça ajuda.

Uma das fontes que você pode utilizar para pesquisa é a **MDN Web Docs**:

https://developer.mozilla.org/pt-BR/docs/Web/HTML

---

# ⭐ Checklist antes de me enviar

Antes de considerar o exercício concluído, confira:

- [ ] `<!doctype html>`
- [ ] `<html lang="pt-BR">`
- [ ] `<head>` completo
- [ ] `<header>`
- [ ] `<nav>`
- [ ] Links internos funcionando
- [ ] Apresentação do produto
- [ ] Imagens com `alt`
- [ ] Tabela de especificações
- [ ] `<thead>`, `<tbody>` e `<tfoot>`
- [ ] Uso pesquisado de `scope`
- [ ] 3 avaliações
- [ ] Datas usando `<time>`
- [ ] Perguntas com `<details>` e `<summary>`
- [ ] Informações de entrega
- [ ] Uso de `<dl>`
- [ ] Formulário de compra
- [ ] Pelo menos 3 novos tipos de `<input>`
- [ ] Galeria com 3 imagens
- [ ] Vídeo
- [ ] Áudio ou outro conteúdo multimídia
- [ ] `<footer>`
- [ ] Pelo menos 3 elementos/atributos novos pesquisados
- [ ] Comentários explicando o que você pesquisou
- [ ] Nenhum CSS
- [ ] Nenhum JavaScript

---

# 🎯 O objetivo deste exercício

Nos anteriores, você estava principalmente aprendendo:

> **"Quais tags existem e como utilizá-las?"**

Agora quero começar a desenvolver outra habilidade:

> **"Eu tenho um problema → descubro quais ferramentas HTML podem resolvê-lo → pesquiso → testo → implemento."**

Essa habilidade vai ser muito mais importante para sua evolução como desenvolvedor do que simplesmente decorar tags.
