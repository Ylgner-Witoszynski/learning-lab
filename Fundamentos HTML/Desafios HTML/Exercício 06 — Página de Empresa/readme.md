# 🟡 Exercício 06 — Página de Empresa

## 🎯 Objetivo

Criar um pequeno **site institucional de uma empresa fictícia de tecnologia**, praticando principalmente:

- Criação de múltiplas páginas HTML;
- Navegação entre páginas;
- URLs relativas;
- Links internos;
- Links externos;
- Formulários;
- Organização e estrutura HTML.

Neste exercício, você vai começar a trabalhar com uma estrutura mais próxima de um **site real**, em vez de concentrar tudo em um único arquivo.

---

## 🏢 Contexto

Imagine que você foi contratado para criar o site de uma empresa fictícia de tecnologia chamada:

> **CodeWave Solutions**

A empresa trabalha com desenvolvimento de sistemas, criação de sites e soluções digitais para outras empresas.

Você deverá criar **3 páginas HTML**:

```text
codewave/
│
├── index.html
├── servicos.html
└── contato.html
```

---

# 📄 1. `index.html` — Página Inicial

A página inicial será responsável pela apresentação da empresa.

### Deve conter:

- Nome da empresa;
- Uma breve apresentação;
- Uma imagem relacionada à tecnologia;
- Uma lista dos principais serviços;
- Links para `servicos.html` e `contato.html`;
- Um link para uma seção interna da própria página.

### Sugestão de estrutura

Você pode organizar a página utilizando:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<footer>`

Não é obrigatório utilizar todas, mas é uma boa oportunidade para começar a praticar uma estrutura mais organizada.

---

# 💻 2. `servicos.html` — Serviços

Crie uma página apresentando os serviços oferecidos pela **CodeWave Solutions**.

### A página deverá possuir pelo menos **5 serviços**.

Por exemplo:

1. Desenvolvimento Web
2. Desenvolvimento de Sistemas
3. Aplicativos Mobile
4. Consultoria em Tecnologia
5. Manutenção e Suporte

Para cada serviço, apresente:

- Nome;
- Pequena descrição.

Você pode organizar os serviços utilizando uma lista ou seções separadas.

### A página também deverá possuir:

- Link para voltar à página inicial;
- Link para a página de contato;
- Um link externo relacionado à tecnologia.

---

# 📩 3. `contato.html` — Contato

Crie uma página para que uma pessoa possa entrar em contato com a empresa.

## Informações de contato

Apresente, por exemplo:

- E-mail;
- Telefone;
- Cidade;
- Horário de atendimento.

Utilize links apropriados para os dados de contato.

### Exemplo de link de e-mail

```html
<a href="mailto:contato@codewave.com"> contato@codewave.com </a>
```

---

## 📝 Formulário

A página também deverá possuir um formulário de contato.

Inclua pelo menos:

- Nome;
- E-mail;
- Assunto;
- Mensagem;
- Botão de envio.

Utilize corretamente:

- `<form>`;
- `<label>`;
- `<input>`;
- `<textarea>`;
- `<button>`;
- `id`;
- `name`;
- `required`.

---

# 🔗 Regras de Navegação

Este é um dos pontos **mais importantes do exercício**.

As três páginas precisam conseguir navegar entre si.

Por exemplo:

```text
index.html
   ↓
servicos.html
   ↓
contato.html
   ↓
index.html
```

Utilize **URLs relativas**.

### Exemplo

Se estiver no `index.html`:

```html
<a href="servicos.html">Serviços</a>
```

E:

```html
<a href="contato.html">Contato</a>
```

Não utilize:

```html
<a href="https://meusite.com/servicos.html"></a>
```

para fazer a navegação entre seus próprios arquivos.

---

# ⚓ Link para Seção Interna

Na página inicial, crie pelo menos **um link que leve para uma seção específica da própria página**.

Por exemplo:

```html
<a href="#sobre">Sobre a empresa</a>
```

E em algum ponto da página:

```html
<section id="sobre">
  <h2>Sobre a CodeWave</h2>
</section>
```

Ao clicar no link, o navegador deverá levar diretamente até essa seção.

---

# 🌐 Link Externo

Utilize pelo menos **um link para um site externo relacionado à tecnologia**.

Você pode escolher uma documentação ou plataforma que esteja estudando.

Se o link abrir em uma nova aba, utilize:

```html
target="_blank" rel="noopener noreferrer"
```

### Exemplo

```html
<a
  href="https://developer.mozilla.org/"
  target="_blank"
  rel="noopener noreferrer"
>
  Documentação MDN
</a>
```

---

# 📌 Requisitos Obrigatórios

## `index.html`

- [ ] Nome da empresa
- [ ] Apresentação
- [ ] Imagem
- [ ] Lista de serviços
- [ ] Link para `servicos.html`
- [ ] Link para `contato.html`
- [ ] Link para uma seção interna

## `servicos.html`

- [ ] Pelo menos 5 serviços
- [ ] Descrição dos serviços
- [ ] Link para `index.html`
- [ ] Link para `contato.html`
- [ ] Pelo menos 1 link externo

## `contato.html`

- [ ] Informações de contato
- [ ] Link de e-mail
- [ ] Telefone
- [ ] Formulário
- [ ] Nome
- [ ] E-mail
- [ ] Assunto
- [ ] Mensagem
- [ ] Botão de envio
- [ ] `<label>` corretamente associado aos campos
- [ ] `required` onde fizer sentido
- [ ] Link para `index.html`
- [ ] Link para `servicos.html`

---

# 🔎 Pesquisa

Neste exercício, **não é necessário pesquisar uma nova tag específica**.

A ideia é utilizar aquilo que você já estudou para resolver o problema.

Preste atenção principalmente em:

- Caminhos relativos;
- `href`;
- `id`;
- Navegação entre documentos;
- `mailto:`;
- `target="_blank"`;
- `rel="noopener noreferrer"`.

---

# ⭐ Desafio Extra

Faça com que **as três páginas tenham uma navegação consistente**.

Ou seja, todas devem possuir um menu semelhante:

```text
Início | Serviços | Contato
```

E o usuário deve conseguir chegar a qualquer uma das três páginas independentemente de onde esteja.

### Exemplo

```html
<nav>
  <a href="index.html">Início</a> | <a href="servicos.html">Serviços</a> |
  <a href="contato.html">Contato</a>
</nav>
```

---

# 📁 Estrutura Final Esperada

```text
codewave/
│
├── index.html
├── servicos.html
└── contato.html
```

---

# 🚫 Importante

Não crie CSS neste exercício.

O foco continua sendo **HTML**, principalmente:

- Estrutura;
- Organização;
- Navegação;
- Links;
- Formulários;
- URLs relativas;
- Seções internas;
- Estrutura de múltiplas páginas.

---

# 🎯 Conceitos Praticados

Ao finalizar o exercício, você deverá ter praticado:

- [ ] Estrutura HTML5
- [ ] Múltiplas páginas
- [ ] Links relativos
- [ ] Links externos
- [ ] Links internos
- [ ] `id`
- [ ] `href`
- [ ] `mailto:`
- [ ] `target="_blank"`
- [ ] `rel="noopener noreferrer"`
- [ ] `<header>`
- [ ] `<nav>`
- [ ] `<main>`
- [ ] `<section>`
- [ ] `<footer>`
- [ ] `<form>`
- [ ] `<label>`
- [ ] `<input>`
- [ ] `<textarea>`
- [ ] `<button>`
- [ ] `required`

---

## 🏁 Conclusão

O objetivo deste exercício não é apenas criar três páginas separadas, mas começar a entender como **páginas HTML se relacionam dentro de um mesmo site**.

Ao finalizar, verifique se é possível navegar entre todas as páginas e se todos os links estão funcionando corretamente.
