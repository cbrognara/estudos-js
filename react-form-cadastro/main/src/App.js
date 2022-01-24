import { Component } from 'react'
import './App.css'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import { Container, Typography } from '@material-ui/core'
import '@fontsource/roboto'
import { validarCPF, validarSenha } from './models/cadastro'

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h4" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro
          onSubmit={onSubmit}
          validacoes={{ cpf: validarCPF, senha: validarSenha }}
        />
      </Container>
    )
  }
}

function onSubmit(dados) {
  console.log(dados)
}

export default App
