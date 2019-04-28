import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import { Route, Switch, Router } from 'react-router';
//import About from './components/About';


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
  //console.log(personIndex);
  const person = {...this.state.persons[personIndex]};
  //console.log(person.name);
  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;
  //console.log(this.state.persons[personIndex].name);
  this.setState({persons:persons});
  //console.log(this.state.persons[personIndex].name);
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
    const style = {
      backgroundColor:'green',
      color:'white',
      border:'1px solid red',
      font:'inherit',
      padding:'8px',
      cursor:'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    };


    let classes = [];
    if(this.state.persons.length <= 3){
      classes.push('red');
    }
    if(this.state.persons.length <=2){
      classes.push('bold');
    }
    if(this.state.persons.length <=1){
      classes.push('yellow');
    }

  let persons = null;
  if(this.state.showPerson){
    persons = (
      <div>
      {
        this.state.persons.map((person,index) => {
          return <Person 
          click={() => this.deletePersonHandler(index)} 
          name={person.name} 
          age={person.age}
          key={person.id} 
          change={(event) => this.changeNameHandler(event, person.id)}/>
        })
        
      }
      </div>
    );
    style.backgroundColor='red';
    style[':hover'] = {
      backgroundColor:'salmon',
      color:'black'
    }
  }

    return (
      //<Router path="/about" Component={ About } />
      //<button style={style} onClick={this.switchNameHandler}>Switch Name</button>

 
      <div className="App">
        <h1 className={classes.join(' ')}>I love ReactJs</h1>

        

        <button
        style={style}
        onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
    </div>

    );
  }
}

export default App;