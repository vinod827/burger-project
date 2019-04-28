import React from 'react';
import styles from '../Person/Person.module.css';

const person = (props) => {


    return (<div className={styles.Person}>
            <p onClick={props.click}>My name is {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
            <input value={props.name} onChange={props.change}/>
         </div>)
};

//\[ //g
//....................Math.'.'.anchor.apply.''.anchor.apply.'.'.'.'.''''.anchor.'.'.'.'.'.'.anchor.apply.'''''']

export default person;