import React from 'react';
import classes from './Cockpit.module.css';

const  cockpit = (props) => {

    let assignedClasses = [];

    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.red;
    }

    if(props.persons.length <= 3){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <=2){
      assignedClasses.push(classes.pink);
    }
    if(props.persons.length <=1){
      assignedClasses.push(classes.yellow);
    }
    if(props.persons.length <=0){
        assignedClasses.push(classes.salmon);
    }

    return (
        <div className={classes.Cockpit}>
        <h1 className={assignedClasses}>F</h1>
        <button className={btnClass} onClick={props.clicked}>Toggle Person</button>
        </div>
    );
}

export default cockpit;