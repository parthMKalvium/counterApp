// import { useState } from 'react'
import React from 'react';
import './App.css'

// function App() {
//   let [count, setCount] = useState(0);

  // function increaseCounter(){
  //   setCount(count+=1);
  // }

//   function decreaseCounter(){
//     if(count>0){
//       setCount(count-=1);
//     }
//   }

//   function resetCounter(){
//     setCount(0);
//   }

//   return (
//     <>
//       <div id='heading'>Counter App</div>
//       <div id='countNumber'>{count}</div>
//       <div id='buttons'>
//         <div id='increase' onClick={increaseCounter}>+</div>
//         <div id='decrease' onClick={decreaseCounter}>-</div>
//         <div id='reset' onClick={resetCounter}>reset</div>
//       </div>
//     </>
//   )
// }

class App extends React.Component{
  constructor(){
    super();
    this.state={
      count : 0
    }
  }

  increaseCounter = ()=>{
    this.setState({count:this.state.count+=1});
  }

  decreaseCounter=()=>{
    if(this.state.count>0){
      this.setState({count:this.state.count-=1});

    }
  }

  resetCounter=()=>{
    this.setState({count:0});

  }

  render(){
    return(
    <>
      <div id='heading'>Counter App</div>
      <div id='countNumber'>{this.state.count}</div>
      <div id='buttons'>
        <div id='increase' onClick={this.increaseCounter}>+</div>
        <div id='decrease' onClick={this.decreaseCounter}>-</div>
        <div id='reset' onClick={this.resetCounter}>reset</div>
      </div>
    </>
    )
  }
}

export default App
