# 🟠 Exercício 04 — Página de Artigo Tecnológico

## 🎯 Objetivo

Criar uma página HTML5 completa simulando um **artigo sobre tecnologia**, como se fosse uma publicação de um blog ou portal de notícias.

Neste exercício, você continuará praticando tudo o que já aprendeu e começará a trabalhar com novos elementos semânticos e multimídia.

### Você irá praticar:

- Estrutura semântica;
- `header`, `nav`, `main` e `footer`;
- `article`;
- `section`;
- `aside`;
- `figure`;
- `figcaption`;
- Imagens;
- Áudio;
- Vídeo;
- `iframe`;
- `details` e `summary`;
- Links internos e externos;
- Listas;
- Tabelas;
- Hierarquia de títulos;
- Acessibilidade básica.

Além disso, algumas partes exigirão **pesquisa independente**.

---

# 📋 Enunciado

Imagine que você possui um blog chamado:

> **TechLab — Tecnologia na prática**

Você deverá criar uma página contendo um artigo sobre um assunto relacionado à tecnologia.

Você pode escolher o tema.

### Sugestões:

- A evolução da Inteligência Artificial;
- Como funciona a Web;
- A importância do HTML5;
- Como o Git mudou o desenvolvimento de software;
- O que é desenvolvimento Front-end;
- A evolução dos computadores;
- Como surgiram os smartphones;
- A importância da acessibilidade na Web.

Escolha **um tema que realmente desperte sua curiosidade**.

Crie o arquivo:

```text
artigo-tecnologia.html
```

---

# 🧱 1. Estrutura da página

Crie uma estrutura HTML completa utilizando:

- `<!DOCTYPE html>`;
- `<html lang="pt-BR">`;
- `<head>`;
- `<meta charset="UTF-8">`;
- `<meta name="viewport">`;
- `<title>`;
- `<body>`.

Dentro do `body`, utilize:

```html
<header>
  <nav>
    <main>
      <article>
        <section>
          <aside>
            <footer></footer>
          </aside>
        </section>
      </article>
    </main>
  </nav>
</header>
```

### ⚠️ Regra importante

Neste exercício, evite utilizar `div` para representar partes que possuem um elemento semântico apropriado.

Antes de usar uma `div`, pergunte:

> "Existe algum elemento HTML5 que descreve melhor o papel desse conteúdo?"

---

# 📰 2. Cabeçalho do site

Crie um `header` representando o cabeçalho do seu blog.

Ele deverá conter:

- Nome do blog;
- Uma breve descrição;
- Um menu de navegação.

Exemplo:

```text
TechLab
Tecnologia explicada de forma simples
```

Não precisa copiar esse exemplo.

Crie sua própria identidade.

---

# 🧭 3. Menu de navegação

Crie um `nav` com links para:

- Início;
- Artigo;
- Conteúdo relacionado;
- Sobre;
- Contato.

Os links poderão utilizar `id` para navegar pela própria página.

### ⭐ Desafio extra

Faça o link **Artigo** levar diretamente para o elemento `<article>`.

Faça o link **Contato** levar para uma seção de contato no final da página.

---

# 📰 4. Artigo principal

O conteúdo principal deverá estar dentro de:

```html
<main>
  <article></article>
</main>
```

Crie um artigo com:

- `h1`;
- Introdução;
- Pelo menos **4 seções**;
- Pelo menos **6 parágrafos**;
- Pelo menos **2 listas**;
- Pelo menos **3 links externos**.

---

# 🧠 5. Hierarquia de títulos

Organize corretamente os títulos.

Você deverá possuir uma estrutura semelhante a:

```text
h1
├── h2
│   ├── h3
│   └── h3
├── h2
│   └── h3
├── h2
└── h2
```

Não utilize títulos apenas porque "ficam maiores".

Escolha o nível de título de acordo com a **hierarquia do conteúdo**.

### 🔎 Pesquisa obrigatória

Pesquise:

> Qual é a importância da hierarquia de headings (`h1` até `h6`) para acessibilidade e SEO?

Não precisa criar todos os níveis de `h1` até `h6`.

O objetivo é entender **quando utilizar cada nível**.

---

# 🖼️ 6. Imagem principal

Adicione uma imagem relacionada ao tema do artigo.

Utilize:

```html
<figure>
  <img>
  <figcaption>
</figure>
```

A imagem deverá possuir:

- `src`;
- `alt`;
- uma legenda através de `figcaption`.

Exemplo conceitual:

```text
[ IMAGEM ]

Figura 1 — Representação de uma rede de computadores.
```

Não copie o exemplo.

---

# 🔎 Pesquisa obrigatória — `figure`

Pesquise:

> Qual é a diferença entre utilizar uma imagem diretamente e utilizar `figure` + `figcaption`?

Depois aplique corretamente no exercício.

---

# 🎵 7. Áudio

Adicione um conteúdo de áudio relacionado ao seu artigo.

Utilize:

```html
<audio></audio>
```

O áudio deverá possuir:

```html
controls
```

para permitir que o usuário controle a reprodução.

### ⭐ Pesquisa obrigatória

Pesquise sobre o elemento:

```html
<audio></audio>
```

e descubra como utilizar:

```html
<source />
```

Depois utilize `<source>` no seu áudio.

### ⚠️ Importante

Utilize apenas um áudio que você tenha permissão para utilizar.

Você pode procurar recursos disponibilizados gratuitamente para uso.

---

# 🎬 8. Vídeo

Adicione um vídeo relacionado ao assunto do artigo.

Utilize:

```html
<video></video>
```

O vídeo deverá possuir controles.

Pesquise e descubra como utilizar:

```html
<source />
```

dentro do elemento `<video>`.

### ⭐ Desafio extra

Pesquise os atributos:

```text
controls
width
height
poster
```

Utilize pelo menos **dois** deles.

---

# 🌐 9. Vídeo externo com iframe

Agora você deverá incorporar um conteúdo externo.

Pesquise como utilizar:

```html
<iframe></iframe>
```

Adicione um vídeo do YouTube relacionado ao tema do seu artigo.

### 🔎 Pesquisa obrigatória

Descubra:

- Para que serve `iframe`;
- Como incorporar um vídeo;
- O que significa `allowfullscreen`;
- O que significa o atributo `title` no `iframe`.

### ⚠️ Atenção

Não copie simplesmente o código.

Entenda o que cada parte faz.

---

# 📌 10. Conteúdo complementar com `aside`

Crie um:

```html
<aside></aside>
```

contendo informações relacionadas ao artigo, mas que não sejam o conteúdo principal.

Você pode colocar:

- Curiosidades;
- Termos importantes;
- Links relacionados;
- Informações adicionais;
- "Você sabia?".

### 🧠 Pense

Pergunte-se:

> Se eu remover esse conteúdo, o artigo principal continuará fazendo sentido?

Se a resposta for **sim**, provavelmente esse conteúdo pode fazer sentido dentro de um `aside`.

---

# ❓ 11. Perguntas frequentes

Crie uma seção chamada:

> Perguntas frequentes

Você deverá pesquisar e utilizar:

```html
<details>
  <summary></summary>
</details>
```

Crie pelo menos **4 perguntas**.

Exemplo conceitual:

```text
▶ O que é HTML?

▶ Para que serve o CSS?

▶ O que é JavaScript?

▶ O que é Front-end?
```

Ao clicar na pergunta, a resposta deverá aparecer.

### 🔎 Pesquisa obrigatória

Pesquise como funcionam:

```html
<details>
  <summary></summary>
</details>
```

E descubra o que acontece quando você adiciona:

```html
open
```

---

# 📊 12. Tabela de informações

Inclua uma pequena tabela relacionada ao tema escolhido.

Ela deverá possuir:

- `table`;
- `thead`;
- `tbody`;
- `tr`;
- `th`;
- `td`.

Crie pelo menos **4 linhas de dados**.

### Exemplos

Se o tema for computadores:

| Geração | Período | Característica |
| ------- | ------- | -------------- |
| 1ª      | ...     | ...            |
| 2ª      | ...     | ...            |

Se o tema for linguagens:

| Linguagem | Ano | Característica |
| --------- | --- | -------------- |
| ...       | ... | ...            |

Crie dados relacionados ao seu próprio tema.

---

# 🔗 13. Links externos

Inclua pelo menos **3 links externos confiáveis** relacionados ao assunto.

Pelo menos dois deverão abrir em uma nova aba.

Utilize:

```html
target="_blank" rel="noopener noreferrer"
```

### ⭐ Desafio

Procure utilizar fontes confiáveis, como:

- Documentações oficiais;
- Universidades;
- Organizações;
- Sites educacionais reconhecidos.

Não utilize apenas resultados aleatórios de pesquisa.

---

# 🧾 14. Citação

Inclua pelo menos uma informação que tenha sido pesquisada.

Depois, indique a fonte utilizando:

```html
<cite></cite>
```

### 🔎 Pesquisa obrigatória

Descubra:

> Qual é a finalidade do elemento `<cite>`?

Depois utilize-o corretamente.

### ⭐ Pesquisa extra

Descubra também:

```html
<blockquote></blockquote>
```

e utilize-o caso encontre uma citação apropriada para o seu artigo.

Não copie textos longos.

---

# 📅 15. Informações do artigo

No início ou no final do artigo, apresente:

- Autor;
- Data de publicação;
- Data de atualização, se desejar;
- Categoria.

Pesquise sobre o elemento:

```html
<time></time>
```

e utilize-o para representar pelo menos uma data.

### ⭐ Desafio

Pesquise o atributo:

```html
datetime
```

e utilize-o corretamente.

---

# 📞 16. Seção de contato

Crie uma seção chamada:

> Entre em contato

Inclua:

- Seu nome;
- E-mail;
- GitHub;
- LinkedIn;
- Uma forma de contato.

Você pode utilizar links com:

```html
mailto:
```

### 🔎 Pesquisa obrigatória

Descubra:

> Como criar um link HTML que abre o aplicativo de e-mail?

---

# 🦶 17. Rodapé

Crie um `footer` contendo:

- Nome do blog;
- Copyright;
- Autor;
- Links para GitHub e LinkedIn;
- Link para voltar ao topo.

Utilize:

```html
<a href="#topo"></a>
```

para retornar ao início.

---

# 🔎 Pesquisas obrigatórias

Neste exercício você deverá pesquisar, no mínimo:

### Pesquisa 1

```text
<h1> até <h6>
```

Hierarquia de headings.

### Pesquisa 2

```text
<figure>
<figcaption>
```

### Pesquisa 3

```text
<audio>
<source>
```

### Pesquisa 4

```text
<video>
<source>
```

### Pesquisa 5

```text
<iframe>
```

### Pesquisa 6

```text
<aside>
```

### Pesquisa 7

```text
<details>
<summary>
```

### Pesquisa 8

```text
<cite>
<blockquote>
```

### Pesquisa 9

```text
<time>
datetime
```

### Pesquisa 10

```text
mailto:
```

---

# ⭐ Desafios extras

Se quiser elevar bastante a dificuldade, tente implementar alguns destes.

## Desafio 1 — `abbr`

Utilize:

```html
<abbr></abbr>
```

para explicar uma abreviação utilizada no artigo.

Pesquise como funciona o atributo:

```text
title
```

---

## Desafio 2 — `mark`

Destaque uma informação importante utilizando:

```html
<mark></mark>
```

Pesquise qual é a finalidade semântica desse elemento.

---

## Desafio 3 — `meter`

Adicione alguma informação quantitativa utilizando:

```html
<meter></meter>
```

Por exemplo, representar um nível ou avaliação.

Pesquise como ele funciona.

---

## Desafio 4 — `progress`

Adicione:

```html
<progress></progress>
```

para representar algum progresso relacionado ao tema.

---

## Desafio 5 — `address`

Pesquise:

```html
<address></address>
```

e descubra em que situação ele deve ser utilizado.

Se fizer sentido para seu projeto, utilize-o na área de contato.

---

# 🚫 Restrições

Neste exercício:

- ❌ Não utilize CSS;
- ❌ Não utilize JavaScript;
- ❌ Não utilize Bootstrap;
- ❌ Não utilize React;
- ❌ Não utilize frameworks;
- ❌ Não copie um artigo pronto da internet;
- ❌ Não copie integralmente textos de sites;
- ❌ Não utilize `div` para substituir elementos semânticos que você já conhece.

O foco continua sendo **HTML5**.

---

# 🧠 Perguntas para responder depois

Quando terminar o exercício, responda:

### 1.

Qual é a diferença entre:

```html
<article></article>
```

e:

```html
<section></section>
```

### 2.

Quando você utilizaria:

```html
<aside></aside>
```

?

### 3.

Qual é a diferença entre:

```html
<figure></figure>
```

e uma imagem comum?

### 4.

Para que serve:

```html
<figcaption></figcaption>
```

?

### 5.

Qual é a função do:

```html
<source />
```

dentro de `audio` e `video`?

### 6.

Para que serve um:

```html
<iframe></iframe>
```

?

### 7.

Qual é a diferença entre:

```html
<details></details>
```

e:

```html
<summary></summary>
```

?

### 8.

Para que serve:

```html
<time datetime="..."></time>
```

?

### 9.

Qual é a finalidade do elemento:

```html
<cite></cite>
```

?

### 10.

Por que devemos evitar utilizar `div` para tudo em uma página HTML5?

---

# ✅ Checklist

Antes de enviar:

- [ ] `<!DOCTYPE html>`
- [ ] `<html lang="pt-BR">`
- [ ] `meta charset`
- [ ] `meta viewport`
- [ ] `<title>`
- [ ] `<header>`
- [ ] `<nav>`
- [ ] `<main>`
- [ ] `<article>`
- [ ] Pelo menos 4 `<section>`
- [ ] `<aside>`
- [ ] `<footer>`
- [ ] `h1`
- [ ] Hierarquia adequada de headings
- [ ] Pelo menos 6 parágrafos
- [ ] Pelo menos 2 listas
- [ ] `<figure>`
- [ ] `<figcaption>`
- [ ] Imagem com `alt`
- [ ] `<audio>`
- [ ] `<source>`
- [ ] `<video>`
- [ ] `<iframe>`
- [ ] `<details>`
- [ ] `<summary>`
- [ ] Tabela
- [ ] `<thead>`
- [ ] `<tbody>`
- [ ] Pelo menos 3 links externos
- [ ] `target="_blank"`
- [ ] `rel="noopener noreferrer"`
- [ ] `<cite>`
- [ ] `<time>`
- [ ] `datetime`
- [ ] Link `mailto:`
- [ ] Link para voltar ao topo
- [ ] Sem CSS
- [ ] Sem JavaScript

---

# 🏁 Entrega

Quando terminar:

1. Salve como `artigo-tecnologia.html`;
2. Abra no navegador;
3. Teste todos os links;
4. Teste o áudio;
5. Teste o vídeo;
6. Teste o `iframe`;
7. Teste as perguntas do `details`;
8. Verifique a tabela;
9. Confira a hierarquia dos títulos;
10. Revise os elementos semânticos;
11. Responda às 10 perguntas;
12. Envie o código aqui para correção.

---

# 👨‍🏫 Regra do exercício

Neste desafio, **não tente pesquisar tudo antes de começar**.

Comece construindo a estrutura que você já conhece.

Quando chegar em algo que ainda não sabe fazer:

1. Identifique o que você não sabe;
2. Pesquise;
3. Leia a documentação ou exemplos;
4. Tente implementar sozinho;
5. Teste no navegador;
6. Só depois peça ajuda se continuar com dúvida.

O objetivo não é apenas aprender novas tags.

É começar a desenvolver a habilidade de pensar:

> **"Eu não sei fazer isso ainda. O que preciso pesquisar para descobrir?"**

Esse é um dos hábitos que mais vai acelerar sua evolução como desenvolvedor.
