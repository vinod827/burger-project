import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry';

class App extends Component {

  state = {
     persons: [
       {id:'1', name:"Vijay Kumar", age: 34},
       {id:'2', name:"Vinod Kumar", age: 34},
       {id:'3', name:"Tom", age: 14},
       {id:'4', name:"Adam", age: 20}
     ],
     showPerson:false
  }

switchNameHandler = () => {
    console.log('button clicked');
    this.setState({
      persons:[
        {name:"N K Vijay Kumar", age: 34},
        {name:"Vinod Nair", age: 34},
        {name:"Tom", age: 14},
        {name:"Adam", age: 20}
      ]
    });
  }


changeNameHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(person => {
    return person.id === id;
  })
  const person = {...this.state.persons[personIndex]};
  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState({persons:persons});
}

togglePersonHandler = () => {
  const tmp = this.state.showPerson;
  this.setState(
        {
         showPerson: !tmp
        }
    );
}

deletePersonHandler = (personIndex) => {
 console.log("person index is "+personIndex);
 //const persons = this.state.persons.slice();
 const persons = [...this.state.persons];
 persons.splice(personIndex, 1);
 this.setState({persons:persons});
}

  render() {
    let btnClass = '';

    let assignedClasses = [];
    if(this.state.persons.length <= 3){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <=2){
      assignedClasses.push(classes.bold);
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.yellow);
    }

  let persons = null;
  if(this.state.showPerson){
    persons = (
      <div>
      {
        this.state.persons.map((person,index) => {
          return <ErrorBoundry key={person.id}>
          <Person 
          click={() => this.deletePersonHandler(index)} 
          name={person.name} 
          age={person.age}         
          change={(event) => this.changeNameHandler(event, person.id)}/>
          </ErrorBoundry>
        })
        
      }
      </div>
    );

    btnClass = classes.Red;
  }

    return (
      <div className={classes.App}>
        <h1 className={assignedClasses.join(' ')}>I love ReactJs</h1>
        <button className={btnClass} onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
    </div>

    );
  }
}

export default App;