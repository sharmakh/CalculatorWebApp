import Result from './components/Result';
import Keypad from './components/Keypad';
import React, { Component } from 'react';
import './App.css'
class App extends Component
{
  constructor()
  {
    super();
    this.state={
      result:""
    }
  }
  reset=()=>{
    this.setState({
      result:""
    });
  }
  backspace=()=>{
    this.setState({
      result: this.state.result.slice(0, -1)
  })
  }
  calculate=()=>
  {
    try
    {
    this.setState(
      {
        result:eval(this.state.result)
      });
    }catch(e)
    {
      this.setState({
        result:"error"
      }        
      );
    }
  
  }
  onClick = button =>{
    if(button === "="){
      this.calculate()
  }
  else if(button === "C"){
    this.reset()
}
else if(button === "CE"){
    this.backspace()
}
else{
  this.setState(
    {
    result : this.state.result+button
    }
  );
}
  };

  render()
  {
    return(
      <div className="calc-body">
        <h1>Simple Calculator</h1>
        <Result result={this.state.result}/>
        <Keypad onClick={this.onClick}/>
      </div>
    );
  }
}
export default App;