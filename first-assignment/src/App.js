import React, { Component } from 'react';
import './App.css';

import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {
  state = {
    value: ''
  }

  textChangeHanlder = (event) => {
    this.setState(
      {
        value: event.target.value
      }
    )
  }

  render() {
    return (
      <div className="App">
        <UserInput
          change={ this.textChangeHanlder }
          value={ this.state.value } />

        <UserOutput
          value={ this.state.value }>
            The user name is:
        </UserOutput>

        <UserOutput value={ 'This one has only a value' } />

        <UserOutput >
          And this one has only a child.
        </UserOutput>
      </div>
    );
  }
}

export default App;
