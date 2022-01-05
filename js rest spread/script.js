// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background, color) {
  background = background || 'blue'
  if (color === undefined) {
    color = 'red'
  }
  const buttonElement = document.createElement('button')
  buttonElement.style.background = background
  return buttonElement
}

const redButton = createButton()

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango']
const comidas = ['Pizza', 'Batata']

//

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const itens = document.querySelectorAll('li')

for (const item of itens) {
  item.classList.add('ativo')
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const windowKey in window) {
  console.log(windowKey + ': ' + window[windowKey])
}
