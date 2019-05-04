import React, {PureComponent} from 'react';
import Person from '../Persons/Person/Person';

class Persons extends PureComponent { 

  componentDidUpdate(preprops, prestate, snapshot){
    console.log("[Persons.js] componentdidupdate **************");
    console.log(snapshot);
  }

  // shouldComponentUpdate(nextprops, nextstate){
  //   console.log("[Persons.js] shouldComponentUpdate *************");
  //   if(nextprops.persons !== this.props.persons || 
  //     nextprops.changed !== this.props.changed ||
  //     nextprops.clicked !== this.props.clicked){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  componentWillUnmount(){
    console.log("[Persons.js] - componentwillUnmount()***********");
  }

  getSnapshotBeforeUpdate(preprops, prestate){
    console.log("[Persons.js] getSnapshotBeforeUpdate *************");
    return {message: 'Snapshot!'};
  }

  render(){
      console.log("[Persons.js] Persons component ****************");
      return this.props.persons.map((person,index) => { 
      return <Person 
      click={() => this.props.clicked(index)}
      name={person.name} 
      age={person.age}
      key={index + 1}         
      change={(event) => this.props.changed(event, person.id)}
      isAuth = {this.props.iaAuthenticated}/>
  })}
}

export default Persons;