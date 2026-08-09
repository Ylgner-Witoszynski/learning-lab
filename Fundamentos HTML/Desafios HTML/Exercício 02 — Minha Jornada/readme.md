# 🟢 Exercício 02 — Minha Jornada

## 🎯 Objetivo

Criar uma página HTML contando a trajetória de uma pessoa desde o início dos estudos até conseguir seu primeiro emprego na área de tecnologia.

Neste exercício, você vai praticar principalmente:

* Hierarquia de títulos;
* Parágrafos;
* Listas ordenadas e não ordenadas;
* Links internos;
* Links externos;
* Imagens;
* Organização do conteúdo;
* Atributos de links.

---

## 📋 Enunciado

Imagine que você precisa criar uma página chamada **"Minha Jornada na Tecnologia"**.

A página deverá contar a história de uma pessoa fictícia que começou a estudar tecnologia, passou por diferentes etapas de aprendizado e finalmente conseguiu seu primeiro emprego na área.

Você pode criar toda a história livremente.

Crie um arquivo chamado:

```text
minha-jornada.html
```

---

## 🧱 Requisitos da página

### 1. Cabeçalho

No início da página, crie uma apresentação contendo:

* Um `h1` com o título **Minha Jornada na Tecnologia**;
* Um pequeno texto apresentando a pessoa;
* Uma imagem relacionada à tecnologia ou à pessoa.

A imagem deverá possuir um `alt` adequado.

---

### 2. Menu de navegação

Crie um pequeno menu no início da página contendo links para:

* Introdução;
* Minha jornada;
* Habilidades;
* Próximos objetivos.

Os links deverão levar para as respectivas partes da **mesma página**.

#### 💡 Exemplo

Você deverá pesquisar e descobrir como fazer algo semelhante a:

```html
<a href="#sobre">Sobre mim</a>
```

E fazer esse link chegar até um elemento que possua o `id` correspondente.

---

### 3. Introdução

Crie uma seção chamada **Sobre mim**.

Ela deverá possuir:

* Um `h2`;
* Pelo menos 2 parágrafos;
* Uma breve apresentação da pessoa;
* Informações sobre como surgiu o interesse por tecnologia.

Essa seção deverá possuir um `id` que permita que o menu navegue até ela.

---

### 4. Minha jornada

Crie uma seção chamada **Minha jornada**.

Apresente pelo menos **5 etapas** da trajetória.

Por exemplo:

1. Primeiro contato com tecnologia;
2. Início dos estudos;
3. Primeiro projeto;
4. Criação do portfólio;
5. Primeiro processo seletivo.

Utilize uma **lista ordenada (`ol`)**.

Cada etapa deverá possuir uma breve explicação.

#### ⭐ Desafio extra

Em pelo menos uma das etapas, inclua um link para uma página externa relacionada ao assunto.

---

### 5. Habilidades

Crie uma seção chamada **Habilidades**.

Apresente pelo menos **8 habilidades**, utilizando uma lista não ordenada (`ul`).

Você pode misturar:

* Linguagens;
* Tecnologias;
* Ferramentas;
* Soft skills.

Exemplo:

```text
HTML5
JavaScript
Git
Comunicação
Trabalho em equipe
```

Não precisa utilizar esses mesmos exemplos.

---

### 6. Próximos objetivos

Crie uma seção chamada **Próximos objetivos**.

Apresente pelo menos **3 objetivos futuros**.

Utilize uma lista ordenada (`ol`) ou não ordenada (`ul`), mas escolha aquela que você considera mais adequada.

#### 🧠 Pense

Por que você escolheu `ol` ou `ul`?

Não existe necessariamente uma única resposta correta. O importante é que você consiga **justificar sua escolha**.

---

## 🔗 7. Navegação interna

A página deverá possuir pelo menos **4 links internos**.

Eles devem permitir navegar entre:

```text
Menu
 ↓
Sobre mim
 ↓
Minha jornada
 ↓
Habilidades
 ↓
Próximos objetivos
```

Ao clicar nos links, o navegador deverá levar o usuário diretamente para a seção correspondente.

---

## 🌐 8. Links externos

Adicione pelo menos **3 links externos** relacionados à tecnologia.

Podem ser links para:

* Documentação;
* Cursos;
* Ferramentas;
* Comunidades;
* Sites de tecnologia.

Pelo menos **um desses links deverá abrir em uma nova aba**.

---

## 💬 9. Comentários

Adicione comentários HTML para identificar as principais partes do documento.

Por exemplo:

```html
<!-- Menu de navegação -->
```

```html
<!-- Minha jornada -->
```

```html
<!-- Habilidades -->
```

Organize os comentários de maneira que ajudem outra pessoa a entender seu código.

---

## 🧩 10. Organização

Utilize elementos HTML de maneira coerente.

Você deverá utilizar:

* `header`;
* `div`;
* `section`;
* `h1`;
* `h2`;
* `h3`;
* `p`;
* `ul`;
* `ol`;
* `li`;
* `a`;
* `img`.

### ⚠️ Atenção

Não utilize uma tag apenas porque ela está na lista.

Pense sobre **qual é a função de cada elemento** dentro da página.

---

# 🔎 Pesquisa obrigatória

Neste exercício você deverá pesquisar **uma coisa nova**.

Descubra:

> Como fazer um link HTML que leve o usuário diretamente para uma parte específica da mesma página?

Você deverá descobrir como funcionam:

* `id`;
* `href="#..."`.

Depois de pesquisar, implemente isso no menu.

### ⭐ Pesquisa extra

Descubra também o que acontece quando um link possui:

```html
target="_blank"
```

e por que pode ser interessante utilizar:

```html
rel="noopener noreferrer"
```

Você já pesquisou isso no exercício anterior, então agora quero ver se consegue aplicar novamente sem precisar consultar a correção.

---

# ⭐ Desafio extra

No final da página, crie um link:

> **⬆ Voltar ao início**

Esse link deverá levar o usuário novamente para o topo da página.

### 🔎 Dica

Você precisará descobrir como criar um `id` no início da página e apontar o link para ele.

---

# 🚫 Restrições

Neste exercício:

* ❌ Não utilize CSS;
* ❌ Não utilize JavaScript;
* ❌ Não copie uma página pronta;
* ❌ Não utilize frameworks.

O foco continua sendo **HTML5**.

---

# ✅ Checklist

Antes de considerar o exercício concluído:

* [ ] Criei `minha-jornada.html`
* [ ] Criei um `h1`
* [ ] Utilizei `h2`
* [ ] Utilizei `h3`
* [ ] Adicionei parágrafos
* [ ] Adicionei uma imagem
* [ ] A imagem possui `alt`
* [ ] Criei um menu de navegação
* [ ] Criei links internos
* [ ] Utilizei `id`
* [ ] Utilizei `href="#..."`
* [ ] Criei uma lista ordenada
* [ ] Criei uma lista não ordenada
* [ ] Adicionei pelo menos 8 habilidades
* [ ] Adicionei pelo menos 3 links externos
* [ ] Pelo menos um link externo abre em nova aba
* [ ] Utilizei `rel="noopener noreferrer"` quando necessário
* [ ] Adicionei comentários HTML
* [ ] Utilizei `header`
* [ ] Utilizei `div`
* [ ] Utilizei `section`
* [ ] Criei o link "Voltar ao início"
* [ ] Testei todos os links
* [ ] A página abre corretamente no navegador
* [ ] Não utilizei CSS
* [ ] Não utilizei JavaScript

---

# 🧠 O que quero que você pratique

No exercício anterior, você aprendeu a utilizar vários elementos individualmente.

Agora quero que você comece a pensar em **como esses elementos se relacionam**.

Quando terminar, pergunte a si mesmo:

> **"Se alguém abrir meu HTML sem nenhum CSS, ainda é possível entender a estrutura e a história da página?"**

Se a resposta for sim, você está no caminho certo.

---

## 🏁 Entrega

Ao finalizar:

1. Salve o arquivo `minha-jornada.html`;
2. Teste no navegador;
3. Clique em **todos os links**;
4. Verifique se todos levam ao lugar correto;
5. Revise seu código;
6. Envie o código aqui para correção.

Não se preocupe se encontrar alguma coisa que você ainda não saiba fazer. **Neste exercício, pesquisar faz parte da atividade.**
