/* Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo. */

/* const valores = {
  receitas: [5555, 19000, 50000],
  despesas: [99999, 55555, 1500000],
  totalReceitas: 0,
  totalDespesas: 1
}

function calcularReceita(entradas) {
  entradas.forEach(coco => {
    console.log(coco)
  })
} */

const objeto = {
  despesas: [1000, 2000, 3000],
  receitas: [4000, 5000, 6000],
  somatorioDeReceitas: 0,
  somatorioDeDespesas: 0,
  somaTotal: 0
}

// Somatorio de Receitas

function somaReceitas(objetoQueVamosUsar) {
  objetoQueVamosUsar.receitas.forEach(elementArray => {
    objetoQueVamosUsar.somatorioDeReceitas += elementArray
  })
}

// Somatório de Despesas

function somaDespesas(objetoQueVamosUsar) {
  objetoQueVamosUsar.despesas.forEach(elementArray => {
    objetoQueVamosUsar.somatorioDeDespesas += elementArray
  })
}

// Cálculo de RECEITAS - DESPESAS

function somaFinal(objetoQueVamosUsar) {
  objetoQueVamosUsar.somaTotal =
    objetoQueVamosUsar.somatorioDeReceitas -
    objetoQueVamosUsar.somatorioDeDespesas
}

// Informe da Situação Final depois do cálculo de receitas - despesas

function situacao(resultado) {
  if (resultado >= 0) {
    console.log('positivo')
  } else {
    console.log('negativo')
  }
}

somaDespesas(objeto)
somaReceitas(objeto)
somaFinal(objeto)
situacao(objeto.somaTotal)
