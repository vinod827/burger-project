import React, { Component } from 'react';
import classes from '../components/App.module.css';
//import Person from '../components/Persons/Person/Person';
//import ErrorBoundry from '../components/ErrorBoundry/ErrorBoundry';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log("Constructor is called");
  }

  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps(props,state)");
    console.log(state);
    console.log(props);
  }



  state = {
     persons: [
       {id:'1', name:"Vijay Kumar", age: 34},
       {id:'2', name:"Vinod Kumar", age: 34},
       {id:'3', name:"Tom", age: 14},
       {id:'4', name:"Adam", age: 20}
     ],
     showPerson:false,
     showCockpit:true
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

componentDidUpdate(){
  console.log("[App.js]-componentDidUpdate()");
}
shouldComponentUpdate(preprops,prestate){
  console.log("[App.js]-shouldComponentUpdate");
  return true;
}
componentDidMount(){
 console.log("componentDidMount()");
}

  render() {
    console.log("render()");
  let persons = null;
  if(this.state.showPerson){
    persons = <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.changeNameHandler} />;
  }

    return (
      <div className={classes.App}>
      <button onClick={() => {
          this.setState({showCockpit:false});
        }}>Remove Cockpit</button>

        {
          this.state.showCockpit ? <Cockpit 
           title={this.props.appTitle}
           showPersons={this.state.showPersons} 
           persons={this.state.persons} 
           buttonClass={this.btnClass} 
           clicked={this.togglePersonHandler}/>
         : null
        }  
        {persons}

    </div>

    );
  }
}

export default App;