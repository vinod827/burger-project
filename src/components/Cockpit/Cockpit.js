import React, {useEffect} from 'react';
import classes from './Cockpit.module.css';

const  cockpit = (props) => {

  // useEffect(() => {
  //   console.log("[Cockpit.js] - useEffect");
  //   //http request
  //   setTimeout(() => {
  //     alert('Date saved to cloud!');
  //   }, 1000);
  // }, [props.persons]);

  useEffect(() => {
    console.log("[Cockpit.js] - useEffect");
    //http request
    setTimeout(() => {
      alert('Date saved to cloud!');
    }, 1000);

    return () => {
        console.log("[Cockpit.js] - clean up");
    };

  }, []);

  useEffect(() => {
      console.log("userffect 2");
      return () => {
        console.log("[Cockpit.js] - 2 clean up");
    };
  })

    let assignedClasses = [];

    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.red;
    }

    if(props.personsLength === 3){
      assignedClasses.push(classes.red);
    }
    if(props.personsLength ===2){
      assignedClasses.push(classes.blue);
    }
    if(props.personsLength ===1){
      assignedClasses.push(classes.yellow);
    }
    if(props.personsLength ===0){
        assignedClasses.push(classes.green);
    }

    return (
        <div className={classes.Cockpit}>
        <h2 className={assignedClasses}>{props.title}</h2>
        <button className={btnClass} onClick={props.clicked}>Toggle Person</button>
        </div>
    );
}

export default React.memo(cockpit);