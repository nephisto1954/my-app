import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);

  }

  componentWillMount () {
    console.log ('[App.js] Inside componentWillMount ()');
  }

  componentDidMount () {
    console.log ('[App.js] Inside componentDidMount ()');
  }


  state =  {
    persons: [
    { id:'aedr1', name: 'Max', age: 28},
    { id:'aedr2', name: 'Manu', age: 29},
    { id:'aedr3', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPerson: false
  }


  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
   });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render () {
    console.log('[App.js] Inside render ()');
    let persons = null;

    if (this.state.showPersons) {
      persons =
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>;
    }

    return (
      <div className={classes.App}>
        <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
