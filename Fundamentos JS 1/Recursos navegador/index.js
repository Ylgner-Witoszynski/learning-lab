// ============================================================================
// 💻 RECURSOS NATIVOS DO NAVEGADOR
// ============================================================================
// O JavaScript oferece várias funções prontas (nativas) para interagir com o
// navegador e com o usuário, como alertas, prompts e confirmações.
// ============================================================================

// ---------------------------------------------------------------------------
// 🧾 Exemplo de variáveis e mensagens no console
// ---------------------------------------------------------------------------
let nome = "Ylgner" // variável armazenando um nome

// Exibe informações no console do navegador:
console.log(nome)   // Mostra o valor da variável no console (mensagem normal)
console.error(nome) // Mostra o valor como um erro (vermelho)
console.warn(nome)  // Mostra o valor como um aviso (amarelo)

// ---------------------------------------------------------------------------
// ⚠️ Exemplo de mensagens na tela (interação com o usuário)
// ---------------------------------------------------------------------------

// Mostra uma caixa de alerta no navegador com uma mensagem simples
window.alert(nome)

// Exibe uma caixa de entrada de texto para o usuário digitar algo
// O valor digitado é armazenado na variável 'nome'
nome = window.prompt("Insira o seu nome:")

// Mostra uma caixa de confirmação (OK ou Cancelar)
// O resultado (true/false) é armazenado na variável 'confirmacao'
let confirmacao = window.confirm("Confirma esta ação?")

// ---------------------------------------------------------------------------
// 💡 Observação importante:
// ---------------------------------------------------------------------------
// O objeto "window" é o objeto global do navegador. 
// Isso significa que podemos omitir "window." antes das funções.
// Os dois exemplos abaixo fazem a MESMA coisa:
alert("Olá, mundo!")     // forma simplificada
window.alert("Olá, mundo!") // forma completa

// ---------------------------------------------------------------------------
// 🧩 O objeto "document"
// ---------------------------------------------------------------------------
// Faz referência à página HTML atual (o DOM - Document Object Model)
// Podemos usar o "document" para acessar e modificar elementos HTML via JS.
console.log(document) // mostra toda a estrutura HTML no console
