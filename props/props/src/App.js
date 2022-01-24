import './App.css'
import React, { Component } from 'react'
// import MyLabel from './Props'
import MyButton from './Props'

class App extends Component {
  render() {
    return (
      <div>
        {/* <MyLabel gravarTexto={escreverConsole} /> */}
        <MyButton label="Me aperte">{'esse texto'}</MyButton>
        <MyButton label="Me aperte" />
        <MyButton label="Me aperte" />
      </div>
    )
  }
}

export default App
