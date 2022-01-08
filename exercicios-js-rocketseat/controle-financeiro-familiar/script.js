const harvard = 'Seu filho não vai pra Harvard'

const inputNota = document.querySelector('#nota')
const btn = document.querySelector('#btnNota')
const result = document.querySelector('#resposta')

function notaConversao(notaNumero) {
  let resultado

  if (notaNumero < 60) {
    resultado = `F ${harvard}`
  } else if (notaNumero >= 60 && notaNumero <= 69) {
    resultado = 'E'
  } else if (notaNumero >= 70 && notaNumero <= 79) {
    resultado = 'D'
  } else if (notaNumero >= 80 && notaNumero < 89) {
    resultado = 'C'
  } else if (notaNumero >= 90) {
    resultado = 'B'
  } else {
    resultado = 'A'
  }
  result.innerText = resultado
}

btn.addEventListener('click', calcular)



function calcular(event) {
  event.preventDefault()
  const nota = inputNota.value
  notaConversao(nota)
}
