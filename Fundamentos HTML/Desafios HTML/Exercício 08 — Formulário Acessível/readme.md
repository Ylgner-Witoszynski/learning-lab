# 🟠 Exercício 08 — Formulário Acessível

Este exercício tem como objetivo praticar a criação de um formulário HTML acessível para uma página de **contato e suporte técnico**.

O foco principal é compreender como utilizar corretamente:

- HTML semântico;
- `<label>`;
- atributos de acessibilidade;
- `required`;
- atributos ARIA apenas quando necessários;
- estruturação correta de formulários.

---

## 📚 Conceitos praticados

Durante o desenvolvimento deste exercício, devem ser utilizados conceitos como:

- HTML semântico;
- `<header>`;
- `<nav>`;
- `<main>`;
- `<section>`;
- `<footer>`;
- `<form>`;
- `<label>`;
- `<input>`;
- `<select>`;
- `<textarea>`;
- `<button>`;
- `required`;
- `aria-label`;
- `aria-required`;
- `aria-live`;
- `aria-labelledby`;
- `aria-describedby`.

> ⚠️ Os atributos ARIA não devem ser utilizados aleatoriamente. Antes de utilizá-los, é importante verificar se o HTML semântico já oferece uma solução acessível.

---

# 📝 Descrição do exercício

Crie uma página contendo um formulário de **contato e suporte técnico**, pensando principalmente em uma pessoa que utiliza leitor de tela.

A página deverá possuir uma estrutura HTML organizada e utilizar elementos semânticos adequadamente.

O formulário deverá permitir que uma pessoa informe seus dados e descreva um problema técnico.

---

## 🧩 Campos obrigatórios

O formulário deverá possuir os seguintes campos:

- nome;
- e-mail;
- assunto;
- tipo de problema;
- descrição do problema;
- prioridade;
- checkbox de confirmação;
- botão de envio.

---

## 🏷️ Uso correto de `<label>`

Todos os campos que possuem uma descrição visível devem utilizar `<label>` corretamente associado ao campo correspondente.

Exemplo:

```html
<label for="nome">Nome:</label>
<input type="text" id="nome" name="nome" required />
```

O atributo `for` do `<label>` deve possuir o mesmo valor do `id` do campo.

Isso permite que:

- usuários de leitores de tela saibam qual informação devem preencher;
- o usuário possa clicar no texto do `<label>` para selecionar o campo;
- a estrutura do formulário seja mais acessível.

---

# 🧠 Estrutura sugerida

A página pode possuir uma estrutura semelhante a esta:

```text
Página de suporte técnico
│
├── Cabeçalho
│   ├── Título da página
│   ├── Descrição
│   └── Navegação
│
├── Conteúdo principal
│   │
│   └── Formulário de suporte
│       ├── Nome
│       ├── E-mail
│       ├── Assunto
│       ├── Tipo de problema
│       ├── Descrição
│       ├── Prioridade
│       ├── Confirmação
│       └── Botão
│
└── Rodapé
```

---

# 🧾 Campos do formulário

## 👤 Nome

Utilize um campo de texto.

O campo deve possuir:

- `<label>`;
- `id`;
- `name`;
- `required`.

Exemplo:

```html
<label for="nome">Nome:</label>
<input type="text" id="nome" name="nome" required />
```

---

## 📧 E-mail

Utilize:

```html
<input type="email" />
```

O campo deve possuir um `<label>` corretamente associado.

---

## 📝 Assunto

Crie um campo para que a pessoa informe resumidamente o motivo do contato.

Pode ser utilizado:

```html
<input type="text" />
```

---

## ⚙️ Tipo de problema

Utilize um `<select>` para permitir que o usuário escolha o tipo de problema.

Sugestões:

- Problema de acesso;
- Erro técnico;
- Dúvida sobre o sistema;
- Problema com pagamento;
- Outro.

Exemplo:

```html
<label for="tipo-problema">Tipo de problema:</label>

<select id="tipo-problema" name="tipo-problema">
  <option value="">Selecione uma opção</option>
  <option value="acesso">Problema de acesso</option>
  <option value="erro">Erro técnico</option>
  <option value="duvida">Dúvida sobre o sistema</option>
  <option value="pagamento">Problema com pagamento</option>
  <option value="outro">Outro</option>
</select>
```

---

## 📄 Descrição do problema

Utilize um `<textarea>`.

A pessoa deverá explicar detalhadamente o problema encontrado.

Exemplo:

```html
<label for="descricao"> Descreva o problema: </label>

<textarea id="descricao" name="descricao" rows="6" required></textarea>
```

---

## 🚨 Prioridade

Utilize campos de opção única.

Você pode utilizar:

- `radio`;
- `select`.

Exemplo utilizando `radio`:

```html
<p id="titulo-prioridade">Qual é a prioridade do problema?</p>

<input type="radio" id="baixa" name="prioridade" value="baixa" />

<label for="baixa"> Baixa </label>

<input type="radio" id="media" name="prioridade" value="media" />

<label for="media"> Média </label>

<input type="radio" id="alta" name="prioridade" value="alta" />

<label for="alta"> Alta </label>
```

---

## ☑️ Checkbox de confirmação

Crie uma confirmação para garantir que a pessoa revisou as informações antes de enviar o formulário.

Exemplo:

```html
<input type="checkbox" id="confirmacao" name="confirmacao" required />

<label for="confirmacao">
  Confirmo que as informações fornecidas estão corretas.
</label>
```

---

# ♿ Acessibilidade

O principal objetivo deste exercício é pensar na experiência de uma pessoa que utiliza tecnologias assistivas.

A página deverá possuir:

- estrutura HTML semântica;
- títulos organizados;
- `<label>` corretamente associado aos campos;
- campos obrigatórios identificados;
- texto alternativo quando necessário;
- atributos ARIA apenas quando fizerem sentido.

---

# 🧠 Uso de ARIA

Você já estudou os seguintes atributos:

- `aria-label`;
- `aria-required`;
- `aria-live`;
- `aria-labelledby`;
- `aria-describedby`;
- `role`.

Utilize-os apenas quando o HTML semântico não for suficiente.

---

## `aria-label`

Pode ser utilizado para fornecer um nome acessível a um elemento quando não existe uma descrição textual visível adequada.

Exemplo:

```html
<nav aria-label="Navegação principal"></nav>
```

Nesse caso, o atributo ajuda a identificar qual é a finalidade da navegação.

---

## `aria-required`

Pode informar que um campo é obrigatório.

Exemplo:

```html
<input type="text" aria-required="true" />
```

Porém, se você estiver utilizando um campo HTML padrão com:

```html
<input required />
```

O atributo `required` já fornece essa informação semanticamente.

Portanto, adicionar `aria-required` junto com `required` normalmente é desnecessário.

---

## `aria-labelledby`

Pode ser utilizado para associar um elemento a outro que funciona como seu título ou rótulo.

Exemplo:

```html
<section aria-labelledby="titulo-suporte">
  <h2 id="titulo-suporte">Formulário de suporte</h2>
</section>
```

---

## `aria-describedby`

Pode ser utilizado para associar um campo a uma descrição complementar.

Exemplo:

```html
<label for="descricao"> Descrição do problema </label>

<textarea id="descricao" aria-describedby="ajuda-descricao"></textarea>

<p id="ajuda-descricao">
  Explique o problema com o máximo de detalhes possível.
</p>
```

---

## `aria-live`

Pode ser utilizado para informar mensagens dinâmicas aos leitores de tela.

Por exemplo:

```html
<p id="mensagem" aria-live="polite"></p>
```

Caso uma mensagem seja adicionada dinamicamente com JavaScript, o leitor de tela poderá ser informado sobre a alteração.

> Neste exercício, você pode preparar essa área, mesmo que o formulário ainda não possua JavaScript.

---

# 🔎 Pesquisa obrigatória

Pesquise e responda em comentários no código:

> Por que devemos priorizar HTML semântico e `<label>` corretamente associado antes de utilizar atributos ARIA?

O comentário deve demonstrar que você compreendeu o motivo.

Você pode criar um comentário semelhante a este:

```html
<!--
O HTML semântico deve ser priorizado porque elementos como
form, label, button e input já possuem significado e
comportamentos reconhecidos pelos navegadores e tecnologias assistivas.

ARIA deve ser utilizado principalmente quando o HTML padrão não
consegue fornecer a informação necessária.
-->
```

---

# 📌 Regras

Sua página deverá:

- possuir `<header>`;
- possuir `<main>`;
- utilizar pelo menos uma `<section>`;
- possuir `<footer>`;
- possuir um formulário completo;
- utilizar `<label>` corretamente;
- utilizar `required` nos campos necessários;
- utilizar elementos semânticos;
- utilizar ARIA apenas quando necessário;
- possuir títulos organizados;
- incluir comentários explicando as decisões relacionadas à acessibilidade.

---

# 🚫 Evite

Não faça o seguinte:

```html
<input aria-label="Nome" aria-required="true" required />
```

Sem pensar se esses atributos realmente são necessários.

Se um `<label>` corretamente associado já identifica o campo e `required` já informa que ele é obrigatório, adicionar ARIA pode ser redundante.

---

# ⭐ Desafio extra

Crie uma área para mensagens do formulário utilizando:

```html
aria-live="polite"
```

A ideia é preparar uma região que futuramente poderia informar mensagens como:

- formulário enviado com sucesso;
- campo preenchido incorretamente;
- erro no envio;
- informações salvas.

Por enquanto, não é obrigatório utilizar JavaScript.

---

# 🎯 Objetivo final

Ao concluir o exercício, você deverá ser capaz de:

- criar formulários HTML mais acessíveis;
- associar corretamente `<label>` e campos de formulário;
- compreender a importância do HTML semântico;
- saber quando ARIA é necessário;
- evitar o uso excessivo de ARIA;
- organizar uma página pensando em leitores de tela;
- utilizar atributos de acessibilidade de maneira consciente.

---

# 📚 Resultado esperado

Ao final, sua página deverá conter:

```text
Página de suporte técnico
│
├── Navegação
├── Conteúdo principal
│   └── Formulário acessível
│       ├── Nome
│       ├── E-mail
│       ├── Assunto
│       ├── Tipo de problema
│       ├── Descrição
│       ├── Prioridade
│       ├── Confirmação
│       └── Envio
│
├── Recursos de acessibilidade
│   ├── Labels associados
│   ├── HTML semântico
│   ├── Required
│   └── ARIA apenas quando necessário
│
└── Rodapé
```

---

**🟠 Nível:** Intermediário

**📚 Foco:** HTML semântico, formulários e acessibilidade

**🎯 Principal objetivo:** Criar uma experiência que seja compreensível e utilizável também por pessoas que dependem de leitores de tela e outras tecnologias assistivas.
