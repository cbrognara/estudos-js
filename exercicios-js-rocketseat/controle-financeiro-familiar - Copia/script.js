const objeto = {
  despesas: [1000, 2000, 3000],
  receitas: [4000, 5000, 6000],
  somatorioDeReceitas: () => {
    this.receitas.forEach(elementArray => {
      this.somatorioDeReceitas += elementArray
    })
  },
  somatorioDeDespesas: () => {
    this.despesas.forEach(elementArray => {
      this.somatorioDeDespesas += elementArray
    })
  },
  somaTotal: this.somatorioDeDespesas - this.somatorioDeReceitas
}

// Informe da Situação Final depois do cálculo de receitas - despesas

function situacao(resultado) {
  if (resultado >= 0) {
    console.log('positivo')
  } else {
    console.log('negativo')
  }
}

situacao(objeto.somaTotal)