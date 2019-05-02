import React, {Component} from 'react';
import styles from './Person.module.css';

class Person extends Component {
   render(){
      console.log("Inside Person component");
      return (
         <div className={styles.Person}>
            <h1>{this.props.title}</h1>
            <p onClick={this.props.click}>My name is {this.props.name} and age is {this.props.age}</p>
            <p>{this.props.children}</p>
            <input value={this.props.name} onChange={this.props.change}/>
         </div>)
   }
};

//\[ //g
//....................Math.'.'.anchor.apply.''.anchor.apply.'.'.'.'.''''.anchor.'.'.'.'.'.'.anchor.apply.'''''']

export default Person;