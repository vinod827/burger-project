import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const  cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  

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
    // setTimeout(() => {
    //   alert('Date saved to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
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
        <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle Person</button>
        
        <AuthContext.Consumer>
          {(context) => 
            <button onClick={context.login}>Log In</button>
          }
        </AuthContext.Consumer>
        
        </div>
    );
}

export default React.memo(cockpit);