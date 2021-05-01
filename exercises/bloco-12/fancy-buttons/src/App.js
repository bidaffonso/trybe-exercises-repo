import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';


class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      opcao: '',
      email: '',
      password: '',
      descricao: '',
      checkbox: 'false',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
      return (
        <section className="App-header">
          <Form handleChange={ this.handleChange } />
        </section>
      );
      
  }
}
export default App;
