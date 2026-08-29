# 🟠 Exercício 07 — Reestruturando um HTML Ruim

## 🎯 Nível: Intermediário

**Foco do exercício:** HTML semântico e organização da estrutura de uma página.

---

## 📌 Situação

Imagine que você recebeu uma página HTML de um colega que **funciona visualmente**, mas foi construída de maneira desorganizada, utilizando muitas `<div>` sem necessidade e sem uma estrutura semântica adequada.

Sua missão é criar uma versão **bem estruturada** de uma página que represente um **portal de notícias sobre tecnologia**.

O objetivo não é apenas fazer a página aparecer no navegador. Você deverá pensar:

> **Qual elemento HTML representa melhor cada parte do conteúdo?**

---

## 📰 Tema do projeto

Crie um portal fictício chamado:

> **Tech News Brasil**

O portal deve apresentar notícias, conteúdos complementares e informações de contato.

---

## 📋 Estrutura obrigatória

Sua página deverá utilizar uma estrutura semelhante a esta:

```
body
│
├── header
│   └── nav
│
├── main
│   ├── section
│   │   ├── article
│   │   ├── article
│   │   └── article
│   │
│   └── aside
│
└── footer
    └── address
```

Você não precisa seguir essa estrutura literalmente, mas os elementos devem ser utilizados de maneira **coerente com o significado do conteúdo**.

---

## 🧱 1. Cabeçalho

Crie um `<header>` contendo:

- nome do portal;
- uma breve descrição ou slogan;
- um `<nav>` com links para as principais áreas da página.

Exemplo de links:

- Início;
- Notícias;
- Destaques;
- Contato.

Os links podem levar para seções internas utilizando IDs.

---

## 📰 2. Conteúdo principal

Utilize apenas um `<main>` para representar o conteúdo principal da página.

Dentro dele, crie uma seção dedicada às notícias.

Utilize o elemento `<section>` para representar o agrupamento de notícias.

Essa seção deverá possuir:

- um título;
- pelo menos **3 notícias**.

---

## 📝 3. Notícias

Cada notícia deverá ser representada por um `<article>`.

Cada `<article>` deverá conter:

- título da notícia;
- subtítulo ou resumo;
- pelo menos dois parágrafos;
- uma imagem;
- um link para continuar lendo ou acessar uma fonte relacionada;
- data de publicação utilizando `<time>`.

Você pode escolher temas como:

- inteligência artificial;
- desenvolvimento web;
- segurança digital;
- hardware;
- programação;
- mercado de tecnologia.

Exemplo:

```
Notícias recentes

├── Nova tecnologia de inteligência artificial
├── Atualização importante para desenvolvedores web
└── Tendências da programação para os próximos anos
```

---

## 🔎 4. Pesquisa obrigatória — `<section>` e `<article>`

Pesquise a diferença entre `<section>` e `<article>`.

Depois, escreva um comentário no código explicando por que utilizou cada elemento.

Exemplo:

```
<!--
Usei <section> para agrupar as notícias relacionadas entre si.

Usei <article> porque cada notícia possui um conteúdo próprio e independente,
podendo ser compreendida separadamente das outras.
-->
```

O ponto principal é que você **pesquise e explique com suas próprias palavras**.

---

## 📌 5. Conteúdo complementar

Crie um `<aside>` com conteúdos relacionados ao portal.

Você pode incluir:

- notícias em destaque;
- artigos mais lidos;
- curiosidades sobre tecnologia;
- links recomendados;
- uma lista de tecnologias populares.

Exemplo:

```
Conteúdo complementar

- 5 linguagens de programação populares
- Como começar no desenvolvimento web
- Segurança digital para iniciantes
- Curiosidades sobre inteligência artificial
```

O `<aside>` deve representar conteúdo complementar ou relacionado ao conteúdo principal, mas não fazer parte diretamente dele.

---

## 📬 6. Informações de contato

Inclua uma área de contato no portal.

Utilize `<address>` para apresentar informações de contato da empresa ou responsável pelo portal.

Inclua pelo menos:

- nome do responsável ou empresa;
- e-mail;
- link para contato;
- localização genérica, caso desejar.

Exemplo:

```
<address>
  <p>Tech News Brasil</p>

  <p>
    E-mail:
    <a href="mailto:contato@technews.com">
      contato@technews.com
    </a>
  </p>
</address>
```

---

## 🦶 7. Rodapé

Crie um `<footer>` contendo:

- direitos autorais;
- ano;
- nome do portal;
- link para voltar ao início da página.

Exemplo:

```
© 2026 Tech News Brasil

Todos os direitos reservados.

Voltar ao início
```

---

## 🧠 Regras principais

Durante o desenvolvimento, utilize corretamente:

- `<header>`;
- `<nav>`;
- `<main>`;
- `<section>`;
- `<article>`;
- `<aside>`;
- `<footer>`;
- `<address>`.

---

## 🚫 Evite

Não faça algo assim:

```
<div>
  <div>
    <div>
      <div>
        <div>
          Todo o conteúdo da página
        </div>
      </div>
    </div>
  </div>
</div>
```

A `<div>` não está proibida.

Você pode utilizá-la quando realmente precisar de um container genérico.

Porém, a ideia deste exercício é evitar usar `<div>` para representar elementos que já possuem uma tag semântica adequada.

---

## ♿ Estrutura e semântica

Preste atenção à hierarquia dos títulos.

Uma possível organização seria:

```
h1 — Tech News Brasil

    h2 — Notícias recentes

        h3 — Primeira notícia
        h3 — Segunda notícia
        h3 — Terceira notícia

    h2 — Conteúdo complementar

    h2 — Contato
```

Não é necessário copiar exatamente essa estrutura, mas ela deve possuir uma hierarquia lógica.

---

## 🖼️ Imagens

Utilize pelo menos uma imagem em cada notícia.

Todas as imagens devem possuir um atributo `alt` com uma descrição adequada do conteúdo da imagem.

Evite utilizar textos como:

```
alt="imagem"
```

ou:

```
alt="foto"
```

O texto alternativo deve ajudar a explicar o conteúdo ou a função da imagem.

---

## 🔗 Links

Sua página deverá possuir:

- links internos para navegar pelas seções;
- pelo menos um link externo relacionado à tecnologia;
- um link de contato por e-mail utilizando `mailto:`.

Para links externos que abrirem em uma nova aba, você pode utilizar:

- `target="_blank"`
- `rel="noopener noreferrer"`

---

## 📝 Comentários obrigatórios

Adicione comentários explicando as principais decisões semânticas do seu código.

Você deve comentar principalmente:

- por que utilizou `<main>`;
- por que utilizou `<section>`;
- por que utilizou `<article>`;
- por que utilizou `<aside>`;
- por que utilizou `<address>`.

Exemplo:

```
<!--
O <main> representa o conteúdo principal e exclusivo desta página.
-->
```

---

## ⭐ Desafio extra

Depois de terminar a estrutura principal, adicione:

### 🔹 Uma notícia em destaque

Utilize um `<article>` contendo:

- título;
- imagem;
- resumo;
- data;
- autor;
- link.

### 🔹 Mais semântica

Experimente utilizar também:

- `<figure>`;
- `<figcaption>`;
- `<time>`.

Utilize esses elementos quando fizer sentido.

### 🔹 Acessibilidade

Analise sua página e responda nos comentários:

> **Se uma pessoa estivesse utilizando um leitor de tela, ela conseguiria entender facilmente a estrutura da minha página?**

Tente identificar se a página possui:

- títulos organizados;
- links com textos compreensíveis;
- imagens com `alt`;
- conteúdo principal identificado;
- navegação identificada;
- notícias separadas adequadamente.

---

## 📚 Checklist final

Antes de considerar o exercício concluído, verifique:

- [ ] A página possui `<header>`;
- [ ] Existe um `<nav>`;
- [ ] Existe apenas um `<main>`;
- [ ] Existe uma área organizada com `<section>`;
- [ ] Existem pelo menos 3 `<article>`;
- [ ] Cada notícia possui título;
- [ ] Cada notícia possui `<time>`;
- [ ] As imagens possuem `alt`;
- [ ] Existe um `<aside>` com conteúdo complementar;
- [ ] Existe um `<address>` com informações de contato;
- [ ] Existe um `<footer>`;
- [ ] Existem links internos;
- [ ] Existe pelo menos um link externo;
- [ ] Existe um link `mailto:`;
- [ ] A hierarquia dos títulos está organizada;
- [ ] Você pesquisou a diferença entre `<section>` e `<article>`;
- [ ] Você explicou essa diferença em comentários;
- [ ] Você evitou utilizar `<div>` sem necessidade.

---

## 🎯 Objetivo do exercício

Ao finalizar este exercício, você deverá ser capaz de olhar para uma página e pensar:

> **“Qual elemento HTML representa melhor o significado deste conteúdo?”**

O foco principal não é quantidade de elementos.

É aprender a utilizar:

```
<header> → conteúdo introdutório ou de navegação

<nav> → links de navegação

<main> → conteúdo principal da página

<section> → agrupamento temático de conteúdo

<article> → conteúdo independente

<aside> → conteúdo complementar

<address> → informações de contato

<footer> → informações de encerramento
```

---

## 🟠 Nível: Intermediário

### 🧠 Habilidades praticadas:

- HTML semântico;
- estrutura de páginas;
- hierarquia de conteúdo;
- organização de notícias;
- links internos e externos;
- imagens e texto alternativo;
- elementos de seção;
- acessibilidade básica;
- diferença entre `<section>` e `<article>`.
