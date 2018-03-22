import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state =  {
    persons: [
    { name: 'Max', age: 28},
    { name: 'Manu', age: 29},
    { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPerson: false
  }

  switchNameHandler = ( newName ) => {
    this.setState({
        persons: [
    { name: newName, age: 32},
    { name: 'Manu', age: 29},
    { name: 'Stephanie', age: 26}
    ]
   })
  }

  nameChangedHandler = ( event ) => {
    this.setState({
      persons: [
      { name: 'Tanguy', age: 32},
      { name: event.target.value, age: 29},
      { name: 'Stephanie', age: 26}
    ]
   })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }




  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler} >My hobby is diving </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
        </div>
        );
    }


    return (
      <div className="App">
        <p>I am a Genius!!!</p>
        <button
        style={style}
        onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
