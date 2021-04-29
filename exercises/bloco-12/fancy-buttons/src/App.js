import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clickCount: 0
    }
  }

  handleClick() {
    this.setState((oldState, _props) => ({
      clickCount: oldState.clickCount + 1
    }))
  }

  render() {
      return (
        <div className="App">
          <button onClick={this.handleClick}>{ this.state.clickCount }</button>
        </div>
      );
      
  }
}
export default App;
