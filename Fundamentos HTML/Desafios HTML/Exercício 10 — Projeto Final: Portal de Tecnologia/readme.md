# 🟣 Exercício 10 — Projeto Final: Portal de Tecnologia

## 📌 Descrição

Agora é hora do projeto final de HTML.

Imagine que você é um **desenvolvedor Front-end** e recebeu uma demanda para criar o site institucional de uma empresa fictícia chamada **DevTech Solutions**.

O objetivo é reunir praticamente todos os conhecimentos praticados nos exercícios anteriores em um projeto com **múltiplas páginas**.

---

## 🎯 Objetivo

Criar um pequeno site completo utilizando apenas **HTML**, aplicando:

- estrutura básica de documentos HTML;
- HTML semântico;
- hierarquia correta de títulos;
- links internos e externos;
- links entre páginas;
- imagens e texto alternativo;
- listas;
- tabelas;
- formulários;
- elementos de acessibilidade;
- elementos de multimídia quando fizer sentido;
- comentários explicativos;
- organização de arquivos.

---

## 📁 Estrutura mínima do projeto

O projeto deverá possuir, no mínimo, a seguinte estrutura:

```text
devtech-solutions/
│
├── index.html
├── sobre.html
├── servicos.html
├── cursos.html
├── contato.html
│
└── imagens/
```

Você pode criar arquivos e pastas adicionais caso considere necessário.

Por exemplo:

```text
devtech-solutions/
│
├── index.html
├── sobre.html
├── servicos.html
├── cursos.html
├── contato.html
│
├── imagens/
│   ├── empresa.jpg
│   ├── servicos.jpg
│   ├── cursos.jpg
│   └── equipe.jpg
│
└── README.md
```

---

# 🏢 Sobre a empresa

A empresa fictícia deverá se chamar:

> **DevTech Solutions**

Você poderá definir a identidade da empresa, desde que ela esteja relacionada à área de tecnologia.

Exemplo:

> A DevTech Solutions é uma empresa especializada em desenvolvimento de software, criação de sites, soluções digitais e capacitação profissional.

Você pode criar livremente:

- slogan;
- missão;
- visão;
- valores;
- história;
- serviços;
- cursos;
- equipe.

---

# 🟢 Requisitos gerais do projeto

Todas as páginas deverão possuir:

- `<!DOCTYPE html>`;
- idioma definido com `lang="pt-BR"`;
- `<meta charset="UTF-8">`;
- `<meta name="viewport">`;
- `<title>` adequado;
- navegação entre as páginas;
- estrutura organizada;
- HTML semanticamente adequado.

A navegação deverá ser consistente.

Exemplo:

```text
Início | Sobre | Serviços | Cursos | Contato
```

Utilize links relativos para navegar entre os arquivos:

```html
<a href="index.html">Início</a>
<a href="sobre.html">Sobre</a>
<a href="servicos.html">Serviços</a>
<a href="cursos.html">Cursos</a>
<a href="contato.html">Contato</a>
```

---

# 🟡 Página 01 — Página inicial

**Arquivo:**

```text
index.html
```

A página inicial deverá apresentar:

- nome da empresa;
- slogan ou apresentação;
- imagem relacionada à empresa;
- breve descrição;
- principais serviços;
- links para outras páginas;
- navegação interna.

## Estrutura sugerida

```text
header
├── nome da empresa
├── slogan
└── nav

main
├── section de apresentação
├── section de serviços
├── section com destaques
└── section de chamada para outras páginas

footer
├── informações da empresa
└── links
```

## Requisitos

Utilize elementos como:

```html
<header>
  <nav>
    <main>
      <section>
        <article>
          <footer></footer>
        </article>
      </section>
    </main>
  </nav>
</header>
```

A página também deverá possuir pelo menos um link interno.

Exemplo:

```html
<a href="#servicos">Conheça nossos serviços</a>
```

---

# 🟡 Página 02 — Sobre

**Arquivo:**

```text
sobre.html
```

Crie uma página apresentando a história da empresa.

A página deverá possuir:

- história;
- missão;
- visão;
- valores;
- equipe.

## Hierarquia de títulos

Utilize corretamente os títulos.

Exemplo:

```text
h1 — Sobre a DevTech Solutions
    h2 — Nossa história
    h2 — Missão
    h2 — Visão
    h2 — Valores
    h2 — Nossa equipe
        h3 — Nome de integrante
```

## Equipe

Apresente pelo menos **3 integrantes fictícios**.

Cada integrante deverá possuir:

- nome;
- cargo;
- pequena descrição;
- imagem ou outro recurso visual.

Exemplo:

```html
<article>
  <h3>João Silva</h3>
  <p>Desenvolvedor Front-end.</p>
</article>
```

---

# 🟠 Página 03 — Serviços

**Arquivo:**

```text
servicos.html
```

Apresente pelo menos **5 serviços** oferecidos pela empresa.

Sugestões:

1. Desenvolvimento de sites;
2. Desenvolvimento de aplicações;
3. Criação de sistemas;
4. Consultoria em tecnologia;
5. Manutenção de software;
6. Desenvolvimento de APIs;
7. Criação de interfaces.

## Cada serviço deverá possuir

- título;
- descrição;
- imagem ou outro recurso visual.

Exemplo:

```html
<article>
  <h2>Desenvolvimento de sites</h2>

  <img
    src="imagens/site.jpg"
    alt="Desenvolvedor trabalhando na criação de um site"
  />

  <p>
    Criamos sites modernos, responsivos e adaptados às necessidades de cada
    projeto.
  </p>
</article>
```

## Organização

Utilize corretamente:

```html
<section>
  <article></article>
</section>
```

### 🔎 Pesquisa obrigatória

Pesquise e explique em comentários no código:

> Por que cada serviço pode ser representado por um `<article>`?

---

# 🟠 Página 04 — Cursos

**Arquivo:**

```text
cursos.html
```

Crie uma página apresentando os cursos oferecidos pela empresa.

A página deverá possuir uma tabela com pelo menos **5 cursos**.

## Informações da tabela

Inclua:

- curso;
- nível;
- duração;
- modalidade;
- preço;
- disponibilidade.

Exemplo:

| Curso      | Nível     | Duração  | Modalidade | Preço | Disponibilidade |
| ---------- | --------- | -------- | ---------- | ----- | --------------- |
| HTML e CSS | Iniciante | 20 horas | Online     | R$ 99 | Disponível      |

## Requisitos obrigatórios

Utilize:

```html
<table>
  <caption>
    <thead></thead>
    <tbody></tbody>
    <tfoot>
      <tr>
        <th></th>
        <td></td>
      </tr>
    </tfoot>
  </caption>
</table>
```

Também utilize:

```html
scope
```

nos cabeçalhos da tabela.

## Mesclagem de células

A tabela deverá utilizar pelo menos um dos recursos:

```html
colspan
```

ou:

```html
rowspan
```

### 🔎 Pesquisa obrigatória

Pesquise:

- quando utilizar `colspan`;
- quando utilizar `rowspan`;
- qual a função de `<caption>`;
- por que `scope` pode ajudar na acessibilidade.

Escreva comentários no código explicando suas escolhas.

---

# 🔴 Página 05 — Contato

**Arquivo:**

```text
contato.html
```

Crie uma página contendo informações de contato e um formulário completo.

## Informações de contato

Inclua:

- e-mail;
- telefone;
- endereço ou localização;
- horário de atendimento.

Você pode utilizar:

```html
<address></address>
```

quando fizer sentido.

---

# 📝 Formulário

O formulário deverá possuir diferentes tipos de campos.

## Campos obrigatórios

### Texto

```html
<input type="text" />
```

### E-mail

```html
<input type="email" />
```

### Telefone

```html
<input type="tel" />
```

### Número

```html
<input type="number" />
```

### Data

```html
<input type="date" />
```

### Radio

Utilize para uma opção exclusiva.

Exemplo:

```text
Como prefere ser contatado?

( ) E-mail
( ) Telefone
```

### Checkbox

Utilize para múltiplas opções ou confirmação.

Exemplo:

```text
[ ] Aceito receber novidades.
```

### Select

```html
<select></select>
```

Sugestão:

```text
Qual serviço você procura?

- Desenvolvimento de sites
- Sistemas
- Consultoria
- Cursos
```

### Textarea

```html
<textarea>
```

Utilize para a mensagem.

### Upload

```html
<input type="file" />
```

Você pode utilizar o upload para:

- briefing;
- documento;
- currículo;
- arquivo complementar.

### Botão

```html
<button type="submit"></button>
```

---

# 🟣 Requisitos de acessibilidade

O projeto deverá possuir:

## Idioma da página

```html
<html lang="pt-BR"></html>
```

## Informações no head

Utilize corretamente:

```html
<meta charset="UTF-8" />
```

e:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Você também pode adicionar uma descrição:

```html
<meta name="description" content="Descrição da página" />
```

---

## Imagens

Todas as imagens deverão possuir:

```html
alt=""
```

O texto alternativo deve descrever adequadamente imagens que transmitam conteúdo.

Evite utilizar:

```text
Imagem de...
Foto de...
```

quando isso não acrescentar informação útil.

---

## Formulários

Os campos deverão possuir:

```html
<label></label>
```

corretamente associado ao campo.

Exemplo:

```html
<label for="nome">Nome:</label>

<input type="text" id="nome" name="nome" />
```

---

## Estrutura semântica

Utilize corretamente elementos como:

```html
<header>
  <nav>
    <main>
      <section>
        <article>
          <aside>
            <footer></footer>
          </aside>
        </article>
      </section>
    </main>
  </nav>
</header>
```

Não utilize `<div>` para substituir elementos semânticos quando existir uma tag mais apropriada.

---

## ARIA

Utilize atributos ARIA apenas quando realmente necessário.

Exemplos que podem fazer sentido:

```html
aria-label aria-labelledby aria-describedby
```

Não é necessário adicionar ARIA em todos os elementos.

### 🔎 Pesquisa obrigatória

Pesquise:

> Por que HTML semântico deve ser priorizado antes de adicionar atributos ARIA?

Explique sua resposta em um comentário no código.

---

# 🔗 Navegação

Todas as páginas deverão possuir navegação entre si.

Exemplo:

```html
<nav aria-label="Navegação principal">
  <a href="index.html">Início</a>
  <a href="sobre.html">Sobre</a>
  <a href="servicos.html">Serviços</a>
  <a href="cursos.html">Cursos</a>
  <a href="contato.html">Contato</a>
</nav>
```

Mantenha o menu consistente em todas as páginas.

---

# 🧭 Navegação interna

Além dos links entre páginas, utilize links internos em pelo menos uma página.

Exemplo:

```html
<a href="#equipe">Conheça a equipe</a>
```

E:

```html
<section id="equipe"></section>
```

---

# 🔗 Links externos

Utilize pelo menos um link externo relacionado à tecnologia.

Se o link abrir em uma nova aba:

```html
<a
  href="https://developer.mozilla.org/"
  target="_blank"
  rel="noopener noreferrer"
>
  Visitar MDN Web Docs
</a>
```

---

# 🖼️ Imagens

Utilize URLs relativas para imagens do projeto sempre que possível.

Exemplo:

```html
<img
  src="imagens/equipe.jpg"
  alt="Integrantes da equipe da DevTech Solutions"
/>
```

---

# 💬 Comentários no código

O projeto deverá possuir comentários explicando decisões importantes.

Exemplo:

```html
<!--
    O main representa o conteúdo principal e exclusivo desta página.
-->
```

Ou:

```html
<!--
    Cada serviço foi representado por um article porque possui
    conteúdo próprio e poderia ser apresentado separadamente.
-->
```

Evite comentar coisas óbvias.

Por exemplo:

```html
<!-- Parágrafo -->
<p>Texto</p>
```

Esse tipo de comentário não é necessário.

---

# ⭐ Desafios extras

Se quiser ir além, tente implementar:

- `<figure>` e `<figcaption>`;
- `<details>` e `<summary>`;
- áudio;
- vídeo;
- conteúdo incorporado com `<iframe>`;
- múltiplos formatos com `<source>`;
- `<time>`;
- `<address>`;
- `<blockquote>`;
- `<cite>`;
- favicon;
- menu interno no rodapé;
- página 404 fictícia;
- formulário com `autocomplete`;
- mensagens de ajuda com `aria-describedby`.

---

# 🔎 Pesquisa obrigatória final

Pesquise e responda em comentários no código:

### 1. Qual a diferença entre:

```html
<section></section>
```

e:

```html
<article></article>
```

### 2. Quando utilizar:

```html
<aside></aside>
```

### 3. Para que serve:

```html
<address></address>
```

### 4. Quando faz sentido utilizar:

```html
<figure></figure>
```

e:

```html
<figcaption></figcaption>
```

### 5. Por que devemos priorizar HTML semântico antes de ARIA?

### 6. Para que servem:

```html
<caption></caption>
```

e:

```html
scope
```

em tabelas?

---

# 📋 Checklist final

Antes de considerar o projeto concluído, verifique:

- [ ] Todas as 5 páginas foram criadas.
- [ ] Todas possuem estrutura HTML básica.
- [ ] Todas possuem `lang="pt-BR"`.
- [ ] Todas possuem `<meta charset="UTF-8">`.
- [ ] Todas possuem viewport.
- [ ] A navegação funciona.
- [ ] Os links entre páginas funcionam.
- [ ] Existe pelo menos um link interno.
- [ ] Existe pelo menos um link externo.
- [ ] Todas as imagens possuem `alt`.
- [ ] As imagens utilizam URLs adequadas.
- [ ] A página Sobre possui história, missão, visão e valores.
- [ ] A equipe possui pelo menos 3 integrantes.
- [ ] A página Serviços possui pelo menos 5 serviços.
- [ ] A página Cursos possui pelo menos 5 cursos.
- [ ] A tabela possui `<thead>` e `<tbody>`.
- [ ] A tabela possui `scope`.
- [ ] A tabela utiliza `colspan` ou `rowspan`.
- [ ] A página Contato possui todos os campos solicitados.
- [ ] Os formulários utilizam `<label>`.
- [ ] Os campos obrigatórios utilizam `required`.
- [ ] O HTML possui estrutura semântica.
- [ ] ARIA foi utilizado apenas quando necessário.
- [ ] Existem comentários explicando decisões importantes.
- [ ] Os arquivos estão organizados.
- [ ] O HTML foi validado.
- [ ] Todos os links foram testados.

---

# 🏁 Entrega

Ao finalizar, envie o projeto completo para correção.

A revisão deverá considerar:

1. **Estrutura do HTML**;
2. **Semântica**;
3. **Hierarquia dos títulos**;
4. **Navegação**;
5. **Links**;
6. **Imagens e acessibilidade**;
7. **Tabelas**;
8. **Formulários**;
9. **Uso de ARIA**;
10. **Organização do projeto**;
11. **Qualidade dos comentários**;
12. **Boas práticas aprendidas durante os exercícios anteriores**.

---

## 🚀 Boa sorte!

Este é o momento de juntar tudo o que foi praticado nos exercícios anteriores.

O objetivo não é criar o projeto perfeito, mas demonstrar que você consegue **planejar, estruturar e construir um pequeno projeto utilizando HTML de forma organizada, semântica e acessível**.

Esse é o **projeto final**, reunindo os conteúdos dos exercícios 1 a 9.
