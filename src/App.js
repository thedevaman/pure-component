import logo from './logo.svg';
import './App.css';
import React,{PureComponent} from 'react'
import User from './User';

//pure component stop re rendering of same state if ther is 
//no changes in state the rendering did't occure 
class App extends PureComponent {
  constructor(){
    super();
    this.state={
      count:1
    }
  }
  
  render()
  {
    // console.warn("Rendering")
  return (
    <div className="App">
   <User count={this.state.count}/>
    <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button>
    </div>
  );
  }
}

export default App;
