import React, {Component} from "react";


// class MyLabel extends Component {
//   render() { 
//     return <h1>{this.props.gravarTexto}</h1>
//   }
// }
// export default MyLabel;

class MyButton extends Component {
  render() {
    return <button>{this.props.children ? this.props.children : this.props.label}</button>
  }
}

export default MyButton

