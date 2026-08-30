# 🔴 Exercício 09 — Página Multimídia

## 📋 Descrição

Neste exercício, você deverá criar uma página HTML sobre um tema de sua preferência, como tecnologia, games, filmes, futebol, música ou qualquer outro assunto que considere interessante.

O objetivo é reunir os principais elementos estudados até agora em uma única página, incluindo estrutura semântica, textos, imagens, listas, tabelas, links, formulários e recursos multimídia.

---

## 🎯 Objetivos

Ao concluir este exercício, você deverá praticar:

- Estrutura semântica em HTML;
- Hierarquia de títulos;
- Navegação interna;
- Links internos e externos;
- Imagens e texto alternativo;
- Listas ordenadas e não ordenadas;
- Tabelas;
- Formulários;
- Reprodução de áudio;
- Reprodução de vídeo;
- Uso de elementos modernos do HTML;
- Organização e acessibilidade do conteúdo.

---

## 🧱 Requisitos da página

A página deverá possuir uma estrutura organizada utilizando elementos semânticos.

Utilize, quando fizer sentido:

- `<header>`;
- `<nav>`;
- `<main>`;
- `<section>`;
- `<article>`;
- `<aside>`;
- `<footer>`.

---

## 🧭 Menu de navegação

Crie um menu de navegação com links internos para diferentes partes da página.

Exemplo:

```html
<nav aria-label="Navegação principal">
  <a href="#inicio">Início</a>
  <a href="#conteudo">Conteúdo</a>
  <a href="#midia">Multimídia</a>
  <a href="#contato">Contato</a>
</nav>
```

Os links devem levar corretamente às seções correspondentes.

---

## 📝 Conteúdo textual

Organize o conteúdo utilizando:

- um título principal com `<h1>`;
- títulos secundários com `<h2>`;
- subtítulos quando necessário;
- parágrafos;
- elementos de destaque como `<strong>` e `<em>`.

Mantenha uma hierarquia lógica entre os títulos.

---

## 🖼️ Imagens

Inclua imagens relacionadas ao tema escolhido.

Cada imagem deve possuir:

- atributo `src`;
- atributo `alt` adequado.

Utilize também:

```html
<figure>
  <img src="imagem.jpg" alt="Descrição da imagem" />
  <figcaption>Descrição ou legenda da imagem.</figcaption>
</figure>
```

### 🔎 Pesquisa obrigatória

Pesquise e explique, em comentários no código, por que você utilizou:

- `<figure>`;
- `<figcaption>`.

---

## 📋 Listas

A página deverá possuir pelo menos:

- uma lista ordenada `<ol>`;
- uma lista não ordenada `<ul>`.

Escolha conteúdos relacionados ao tema da página.

Exemplos:

- etapas de algum processo;
- tecnologias utilizadas;
- curiosidades;
- recomendações;
- características.

---

## 📊 Tabela

Crie uma tabela relacionada ao tema escolhido.

A tabela deverá possuir:

```html
<table>
  <thead>
    ...
  </thead>

  <tbody>
    ...
  </tbody>
</table>
```

Utilize:

- `<table>`;
- `<thead>`;
- `<tbody>`;
- `<tr>`;
- `<th>`;
- `<td>`.

Você pode utilizar `<tfoot>` se fizer sentido para os dados apresentados.

---

## 🔗 Links

Inclua:

- links internos para navegar pela própria página;
- pelo menos um link externo;
- pelo menos um link externo abrindo em uma nova aba.

Para links externos abertos em nova aba, utilize:

```html
<a href="https://exemplo.com" target="_blank" rel="noopener noreferrer">
  Visitar site
</a>
```

---

## 📝 Formulário

Inclua um formulário relacionado ao tema da página.

O formulário deverá possuir alguns campos apropriados, como:

- nome;
- e-mail;
- campo de seleção;
- checkbox ou radio;
- textarea;
- botão de envio.

Utilize corretamente:

- `<label>`;
- `for`;
- `id`;
- `name`;
- `required`.

Exemplo:

```html
<form>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" required />

  <button type="submit">Enviar</button>
</form>
```

---

## 🎵 Áudio

Inclua pelo menos um áudio utilizando:

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />

  Seu navegador não suporta o elemento de áudio.
</audio>
```

Você pode pesquisar arquivos de áudio livres para testes ou utilizar arquivos locais.

---

## 🎥 Vídeo

Inclua pelo menos um vídeo utilizando:

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />

  Seu navegador não suporta o elemento de vídeo.
</video>
```

Você pode definir largura utilizando o atributo `width`.

---

## ▶️ Conteúdo externo em vídeo

Como desafio adicional, você pode incorporar um vídeo externo utilizando:

```html
<iframe></iframe>
```

Exemplo de utilização:

```html
<iframe
  src="URL_DO_VIDEO"
  title="Descrição do vídeo"
  width="560"
  height="315"
  allowfullscreen
>
</iframe>
```

Pesquise a diferença entre:

- `<video>`;
- `<iframe>`.

---

## 🔎 Pesquisa obrigatória — Elementos multimídia

Pesquise e tente utilizar:

- `<figure>`;
- `<figcaption>`;
- `<source>`.

Depois, explique em comentários no código por que cada elemento foi utilizado.

Exemplo:

```html
<!--
  figure agrupa um conteúdo visual com sua legenda.
-->
<figure>
  <img src="imagem.jpg" alt="Descrição da imagem" />

  <!--
    figcaption fornece uma legenda para o conteúdo da figure.
  -->
  <figcaption>Descrição da imagem.</figcaption>
</figure>
```

---

## 🎬 Uso de múltiplos formatos

Pesquise como oferecer mais de um formato para o navegador escolher.

Exemplo com vídeo:

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />

  <source src="video.webm" type="video/webm" />

  Seu navegador não suporta o elemento de vídeo.
</video>
```

O navegador tentará utilizar o primeiro formato compatível.

Você pode aplicar o mesmo conceito ao áudio.

---

## ♿ Acessibilidade

Durante o desenvolvimento, preste atenção em:

- utilizar `lang="pt-BR"` na tag `<html>`;
- utilizar `alt` adequado nas imagens;
- manter títulos em ordem hierárquica;
- utilizar links com textos descritivos;
- utilizar `<label>` associado aos campos do formulário;
- adicionar `title` em conteúdos incorporados, como `<iframe>`;
- utilizar HTML semântico;
- não utilizar ARIA sem necessidade.

Priorize HTML semântico antes de adicionar atributos ARIA.

---

## 📁 Estrutura sugerida

Você pode organizar o exercício da seguinte forma:

```text
exercicio-09/
│
├── index.html
│
└── assets/
    ├── images/
    ├── audio/
    └── video/
```

A estrutura pode variar de acordo com a sua implementação.

---

## 🚀 Desafio extra

Se quiser aumentar a complexidade do exercício, tente:

- utilizar `<details>` e `<summary>`;
- criar uma área de perguntas frequentes;
- utilizar `<time>`;
- adicionar `<blockquote>` e `<cite>`;
- utilizar `<caption>` na tabela;
- oferecer mais de um formato de áudio;
- oferecer mais de um formato de vídeo;
- criar uma página visualmente bem organizada apenas com HTML.

---

## 📌 Checklist

Antes de considerar o exercício concluído, verifique:

- [ ] A página possui um `<h1>`;
- [ ] Os títulos seguem uma hierarquia lógica;
- [ ] A página possui estrutura semântica;
- [ ] Existe um menu de navegação;
- [ ] Existem links internos;
- [ ] Existem links externos;
- [ ] Existem imagens com `alt`;
- [ ] Existe uma `<figure>`;
- [ ] Existe uma `<figcaption>`;
- [ ] Existe uma lista ordenada;
- [ ] Existe uma lista não ordenada;
- [ ] Existe uma tabela;
- [ ] Existe um formulário;
- [ ] Os campos possuem `<label>`;
- [ ] Existe pelo menos um áudio;
- [ ] Existe pelo menos um vídeo;
- [ ] Foi utilizado `<source>`;
- [ ] Existe fallback para navegadores sem suporte a áudio ou vídeo;
- [ ] Foram adicionados comentários explicando os elementos pesquisados;
- [ ] O HTML foi validado e está organizado.

---

## 🎓 O que este exercício revisa

Este exercício reúne praticamente todos os principais conteúdos estudados até agora em HTML:

```text
Estrutura básica
↓
Títulos e parágrafos
↓
Links
↓
Imagens
↓
Listas
↓
Tabelas
↓
Formulários
↓
HTML semântico
↓
Acessibilidade
↓
Áudio e vídeo
↓
Elementos multimídia modernos
```

---

## 🏆 Desafio final

Crie uma página que pareça um pequeno site real, mesmo utilizando apenas HTML.

Pense na organização como se você estivesse desenvolvendo uma página para um usuário real.

O foco não é utilizar CSS neste momento.

O objetivo é demonstrar que você consegue estruturar corretamente uma página HTML completa, semântica, organizada e acessível.

Esse arquivo preserva a formatação Markdown ao ser copiado para o GitHub.
