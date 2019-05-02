import React, {Component} from 'react';
import Person from '../Persons/Person/Person';

class Persons extends Component { 
  // static getDerivedStateFromProps(props,state){
  //   console.log("getDerivedStateFromProps - props update");
  //   console.log(props + "--------" + state);
  // }

  componentDidUpdate(preprops, prestate, snapshot){
    console.log("componentdidupdate");
    console.log(snapshot);
  }

  shouldComponentUpdate(nextprops, nextstate){
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(preprops, prestate){
    console.log("getSnapshotBeforeUpdate");
    return {message: 'Snapshot!'};
  }

  // componentWillUpdate(){
  //   console.log("componentWillUpdate");
  // }

  render(){
      console.log("Persons component");
      return this.props.persons.map((person,index) => { 
      return <Person 
      click={() => this.props.clicked(index)}
      name={person.name} 
      age={person.age}         
      change={(event) => this.props.changed(event, person.id)}/>
  })}
}

export default Persons;