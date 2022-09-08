
import './App.css';
import React,{PureComponent} from 'react'


//pure component stop re rendering of same state if ther is 
//no changes in state the rendering did't occure 
class User extends PureComponent {
 
  
  render()
  {
    console.warn("User Component Rendering")
  return (
    <div className="App">
    <h1>User Component:{this.props.count}</h1>
    </div>
  );
  }
}

export default User;
