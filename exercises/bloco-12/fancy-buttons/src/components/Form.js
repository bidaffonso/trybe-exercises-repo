import React, { Component } from 'react';

class Form extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <form>
        <select name="opcao" value={ this.state.opcao } onChange={ handleChange }>
          <option value="Opção 1" >Opção 1</option>
          <option value="Opção 2" >Opção 2</option>
          <option value="Opção 3" >Opção 3</option>
        </select>
        <input type="email" name="email" placeholder="exemplo@email.com" value={ this.state.email } onChange={ handleChange } />
        <input type="password" name="password" placeholder="password" value={ this.state.password } onChange={ handleChange } />
        <textarea placeholder="Descrição" name="descricao" value={ this.state.descricao } onChange={ handleChange } />
        <input type="checkbox" name="checkbox" value={ this.state.checkbox } onChange={ handleChange } />
      </form>
    )
  }
}

export default Form;