import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './components/ValidationComponent/ValidationComponent';
import CharComponent from './components/CharComponent/CharComponent';

class App extends Component {
  state = {
    textValue: ''
  }

  textChangeHandler = (event) => {
    this.setState({textValue: event.target.value});
  }

  removeChar = (index) => {
    let textArray = [...this.state.textValue];
    textArray.splice(index, 1);
    this.setState({
      textValue: textArray.join(''),
    })
  }

  charComponentDivClickHandler = (index) => {
    this.removeChar(index);
  }

  render() {
    const charComponents = [...this.state.textValue].map((char, index) => {
      return(
        <CharComponent
          char={char}
          click={(event) => this.charComponentDivClickHandler(index)}
          key={index}
        />
      );
    })

    return (
      <div className="App">
        <h1>
          Stringnator
        </h1>
        <input
          placeholder="type your string here..."
          value={this.state.textValue}
          onChange={this.textChangeHandler} />
        <ValidationComponent value={this.state.textValue} />
        {charComponents}
      </div>
    );
  }
}

export default App;
