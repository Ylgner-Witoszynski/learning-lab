# 🟡 Exercício 03 — Painel de Estudos

## 🎯 Objetivo

Criar uma página HTML chamada **"Meu Painel de Estudos"**, onde você deverá organizar informações sobre seus estudos de programação.

O objetivo deste exercício é começar a trabalhar com estruturas mais complexas do HTML5, principalmente:

* Tabelas;
* Formulários;
* Diferentes tipos de `input`;
* Labels;
* Listas;
* Links;
* Organização semântica;
* Atributos HTML;
* Validação básica através do HTML.

Além disso, você terá algumas **pesquisas obrigatórias** para descobrir recursos que ainda não foram apresentados diretamente nos exercícios anteriores.

---

## 📋 Enunciado

Imagine que você está criando uma pequena página para acompanhar sua evolução nos estudos de programação.

A página deverá apresentar:

1. Uma apresentação do seu painel;
2. Uma lista de tecnologias que você estuda;
3. Uma tabela mostrando seu progresso;
4. Um formulário para registrar uma nova sessão de estudos;
5. Links úteis;
6. Uma área com seus próximos objetivos.

Crie um arquivo chamado:

```text
painel-estudos.html
```

---

# 🧱 1. Estrutura inicial

A página deverá possuir uma estrutura HTML completa contendo:

* `<!DOCTYPE html>`;
* `<html lang="pt-BR">`;
* `<head>`;
* `<meta charset="UTF-8">`;
* `<meta name="viewport">`;
* `<title>`;
* `<body>`.

No corpo da página, utilize pelo menos:

* `header`;
* `nav`;
* `main`;
* `section`;
* `footer`.

### 🧠 Pense

No exercício anterior você utilizou `div` para algumas partes.

Agora quero que você tente utilizar elementos **semânticos** sempre que existir um elemento apropriado para representar aquela parte da página.

---

# 🏠 2. Cabeçalho

Crie um `header` contendo:

* Um `h1` com o título **Meu Painel de Estudos**;
* Um parágrafo explicando o objetivo da página;
* Uma imagem relacionada aos estudos ou programação.

A imagem deverá possuir um `alt` descritivo.

---

# 🧭 3. Menu de navegação

Crie um `nav` contendo links internos para:

* Tecnologias;
* Progresso;
* Registrar estudo;
* Objetivos.

Cada link deverá levar diretamente à sua respectiva seção.

Utilize `id` e `href="#..."`.

---

# 💻 4. Tecnologias estudadas

Crie uma seção chamada **Tecnologias que estou estudando**.

Apresente pelo menos **6 tecnologias ou assuntos**.

Organize-os utilizando uma lista não ordenada (`ul`).

Exemplos:

* HTML5;
* CSS3;
* JavaScript;
* Git;
* React;
* Banco de dados.

Você pode escolher outros.

### ⭐ Desafio extra

Organize algumas tecnologias em categorias.

Por exemplo:

**Front-end**

* HTML5
* CSS3
* JavaScript

**Ferramentas**

* Git
* GitHub

Pesquise como utilizar uma lista dentro de outra lista.

---

# 📊 5. Tabela de progresso

Crie uma seção chamada **Meu progresso**.

Monte uma tabela mostrando sua evolução em pelo menos **5 assuntos**.

A tabela deverá possuir, no mínimo, estas colunas:

| Tecnologia | Nível         | Projetos | Último estudo |
| ---------- | ------------- | -------- | ------------- |
| HTML5      | Intermediário | 2        | 08/08/2026    |
| JavaScript | Iniciante     | 1        | 07/08/2026    |

Você deverá criar seus próprios dados.

## 🔎 Requisitos da tabela

Utilize corretamente:

* `<table>`;
* `<tr>`;
* `<th>`;
* `<td>`.

### ⭐ Pesquisa obrigatória

Pesquise sobre:

```html
<thead>
<tbody>
<tfoot>
```

Depois utilize pelo menos:

* `thead`;
* `tbody`.

O `tfoot` é opcional.

### 🧠 Pense

Qual é a diferença entre:

```html
<th>
```

e:

```html
<td>
```

Você deverá conseguir explicar isso quando enviar o exercício para correção.

---

# 📝 6. Formulário — Registrar estudo

Crie uma seção chamada **Registrar sessão de estudo**.

O usuário deverá conseguir preencher informações sobre uma sessão de estudos.

O formulário deverá possuir pelo menos:

### Nome

Utilize:

```html
<input type="text">
```

### E-mail

Utilize:

```html
<input type="email">
```

### Data do estudo

Utilize:

```html
<input type="date">
```

### Tecnologia estudada

Crie um campo para selecionar uma tecnologia.

Pesquise como utilizar:

```html
<select>
<option>
```

### Tempo de estudo

Crie um campo para informar quantos minutos foram estudados.

Pesquise qual tipo de `input` é mais apropriado para números.

### Nível de dificuldade

Crie opções utilizando `radio`.

Por exemplo:

* Fácil;
* Médio;
* Difícil.

### Assuntos estudados

Permita selecionar mais de uma opção utilizando `checkbox`.

Por exemplo:

* Teoria;
* Exercícios;
* Projeto;
* Pesquisa.

### Observações

Utilize:

```html
<textarea>
```

para que o usuário possa escrever observações sobre a sessão.

---

# 🏷️ 7. Labels

Todos os campos do formulário deverão possuir um `<label>`.

Não faça simplesmente:

```html
<input type="text">
```

Crie uma relação entre o `label` e o campo utilizando `for` e `id`.

### 🔎 Pesquisa obrigatória

Pesquise:

> Como associar corretamente um `<label>` a um `<input>`?

Depois aplique esse conhecimento em **todos os campos possíveis**.

---

# 🔐 8. Validação HTML

Alguns campos deverão ser obrigatórios.

Escolha pelo menos **4 campos** e utilize:

```html
required
```

Por exemplo:

```html
<input type="text" required>
```

### ⭐ Pesquisa extra

Pesquise sobre os atributos:

```text
placeholder
min
max
minlength
maxlength
```

Escolha pelo menos **dois** deles e utilize corretamente no formulário.

---

# 🔘 9. Botões

O formulário deverá possuir pelo menos:

* Um botão para enviar o formulário;
* Um botão para limpar os campos.

Pesquise a diferença entre:

```html
<button type="submit">
```

e:

```html
<button type="reset">
```

Utilize os dois.

---

# 🎯 10. Objetivos

Crie uma seção chamada **Próximos objetivos**.

Apresente pelo menos **5 objetivos**.

Você pode utilizar:

* Lista ordenada;
* Lista não ordenada.

Mas pense novamente:

> Qual tipo de lista representa melhor esse conteúdo?

### ⭐ Desafio extra

Separe os objetivos em:

**Curto prazo**

**Médio prazo**

**Longo prazo**

Pesquise como criar listas aninhadas para representar essa estrutura.

---

# 🔗 11. Links úteis

Crie uma seção chamada **Materiais úteis**.

Adicione pelo menos **4 links externos** relacionados aos estudos.

Pelo menos:

* 1 documentação;
* 1 plataforma de estudos;
* 1 ferramenta;
* 1 comunidade ou recurso que você considera útil.

Pelo menos dois links deverão abrir em uma nova aba.

Utilize corretamente:

```html
target="_blank"
rel="noopener noreferrer"
```

---

# 🦶 12. Rodapé

Crie um `footer` contendo:

* Copyright;
* Seu nome;
* Um link para seu GitHub;
* Um link para voltar ao topo da página.

Exemplo:

```text
© 2026 — Seu Nome
GitHub
Voltar ao início
```

---

# 🔎 Pesquisas obrigatórias

Neste exercício, você deverá pesquisar e aplicar conhecimentos que ainda não foram trabalhados diretamente.

## Pesquisa 1 — Tabelas

Descubra:

```html
<thead>
<tbody>
<tfoot>
```

---

## Pesquisa 2 — Formulários

Descubra:

```html
<form>
<label>
<select>
<option>
<textarea>
```

---

## Pesquisa 3 — Inputs

Pesquise os tipos:

```text
text
email
date
number
radio
checkbox
```

Entenda quando cada um deve ser utilizado.

---

## Pesquisa 4 — Label

Descubra como relacionar:

```html
<label>
```

com:

```html
<input>
```

utilizando:

```text
for
id
```

---

## Pesquisa 5 — Validação

Pesquise:

```text
required
placeholder
min
max
minlength
maxlength
```

Utilize pelo menos **três** desses atributos no exercício.

---

# ⭐ Desafios extras

Se quiser aumentar a dificuldade, tente implementar:

### Desafio 1

Utilizar:

```html
<fieldset>
<legend>
```

para organizar grupos de campos do formulário.

Pesquise como esses elementos funcionam.

---

### Desafio 2

Utilizar:

```html
<datalist>
```

em algum campo do formulário.

Descubra para que esse elemento serve.

---

### Desafio 3

Adicionar um campo de seleção de horário utilizando:

```html
<input type="time">
```

---

### Desafio 4

Adicionar uma barra de progresso utilizando:

```html
<progress>
```

Por exemplo:

> HTML5 — 70% concluído.

Pesquise como o elemento funciona.

---

# 🚫 Restrições

Neste exercício:

* ❌ Não utilize CSS;
* ❌ Não utilize JavaScript;
* ❌ Não utilize Bootstrap;
* ❌ Não utilize React;
* ❌ Não copie um formulário pronto;
* ❌ Não utilize frameworks.

O foco continua sendo **HTML5 puro**.

---

# 🧠 Perguntas para responder após o exercício

Quando terminar, antes de enviar o código, tente responder:

### 1. Qual é a diferença entre:

```html
<th>
```

e:

```html
<td>
```

### 2. Qual é a função do:

```html
<label>
```

?

### 3. Qual é a diferença entre:

```html
<input type="radio">
```

e:

```html
<input type="checkbox">
```

?

### 4. Para que serve:

```html
required
```

?

### 5. Qual é a diferença entre:

```html
<button type="submit">
```

e:

```html
<button type="reset">
```

?

### 6. Por que devemos utilizar elementos semânticos como:

```html
<header>
<nav>
<main>
<section>
<footer>
```

em vez de utilizar `div` para absolutamente tudo?

---

# ✅ Checklist

Antes de enviar o exercício:

* [ ] `<!DOCTYPE html>`
* [ ] `<html lang="pt-BR">`
* [ ] `<head>`
* [ ] `meta charset`
* [ ] `meta viewport`
* [ ] `<title>`
* [ ] `<header>`
* [ ] `<nav>`
* [ ] `<main>`
* [ ] `<section>`
* [ ] `<footer>`
* [ ] `h1`
* [ ] `h2`
* [ ] Parágrafos
* [ ] Imagem com `alt`
* [ ] Menu com links internos
* [ ] Pelo menos 6 tecnologias
* [ ] Lista não ordenada
* [ ] Tabela
* [ ] `thead`
* [ ] `tbody`
* [ ] `tr`
* [ ] `th`
* [ ] `td`
* [ ] Formulário
* [ ] `label`
* [ ] `input`
* [ ] `select`
* [ ] `option`
* [ ] `textarea`
* [ ] `radio`
* [ ] `checkbox`
* [ ] `date`
* [ ] `email`
* [ ] `number`
* [ ] Pelo menos 4 campos com `required`
* [ ] Pelo menos 3 atributos de validação
* [ ] `button type="submit"`
* [ ] `button type="reset"`
* [ ] Pelo menos 5 objetivos
* [ ] Pelo menos 4 links externos
* [ ] Link para voltar ao topo
* [ ] Sem CSS
* [ ] Sem JavaScript

---

# 🏁 Entrega

Quando terminar:

1. Salve como `painel-estudos.html`;
2. Abra no navegador;
3. Teste todos os links;
4. Teste o formulário;
5. Teste o botão de reset;
6. Verifique se os campos obrigatórios realmente são exigidos;
7. Confira se a tabela está organizada;
8. Revise seu HTML;
9. Responda às 6 perguntas no final;
10. Envie o código aqui.

## 👨‍🏫 Regra deste exercício

**Não tenha pressa para terminar.**

Se aparecer uma tag ou atributo que você não conhece, **pesquise antes de perguntar**.

Se você pesquisar, testar e mesmo assim não entender, aí sim pode me perguntar.

A ideia agora é começar a desenvolver a habilidade mais importante de um programador:

> **saber descobrir como fazer aquilo que ainda não sabe fazer.**
