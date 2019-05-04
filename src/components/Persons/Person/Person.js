import React, {Component, Fragment} from 'react';
import Aux from '../../../hoc/Auxiliary';
import withClasses from '../../../hoc/withClasses';
import style from '../Person/Person.module.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

   constructor(props){
      super(props);
      this.inputElementRef = React.createRef();
   }

   componentDidMount(){
      //this.inputElement.focus();
      this.inputElementRef.current.focus();
   }

   render(){
      console.log("Inside Person component");
      return (  
      <Aux>
            <AuthContext.Consumer>
               {
                (context) => context.authenticated ? 
                <p>User authenticated successfully </p> 
                : 
                <p>Please log in!</p>
               }
            </AuthContext.Consumer>           
            <h1>{this.props.title}</h1>
            <p onClick={this.props.click}>My name is {this.props.name} and age is {this.props.age}
            </p>
            <p>{this.props.children}</p>
            <input value={this.props.name} onChange={this.props.change}
            //ref={(inputEl) => {this.inputElement = inputEl}}
            ref = {this.inputElementRef}
            
            />
      </Aux>  
      )       
   }
};

Person.propTypes = {
   click: PropTypes.func,
   name: PropTypes.string,
   age: PropTypes.number,
   change: PropTypes.func
}

//\[ //g
//....................Math.'.'.anchor.apply.''.anchor.apply.'.'.'.'.''''.anchor.'.'.'.'.'.'.anchor.apply.'''''']

export default withClasses(Person, style.Person);