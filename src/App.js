import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>I am a Genius!!!</p>
        <Person />
      </div>
    );
  }
}

export default App;
