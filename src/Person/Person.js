import React from 'react';
import Person from '../Person/Person.css';
import Radium from 'radium';

const person = (props) => {

   const style = {
      '@media (min-width:500px)' : {
            width:'450px'
      }
   };

    return (<div className="Person" style={style}>
            <p onClick={props.click}>My name is {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
            <input value={props.name} onChange={props.change}/>
         </div>)
};

//\[ //g
//....................Math.'.'.anchor.apply.''.anchor.apply.'.'.'.'.''''.anchor.'.'.'.'.'.'.anchor.apply.'''''']

export default Radium(person);