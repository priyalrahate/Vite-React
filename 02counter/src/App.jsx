import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter, setCounter] =useState(2)
  // let counter=5

  const addValue=()=>{
    // setCounter(counter+1) // earlier 
    setCounter(prevCounter=>prevCounter+1)   // here the code will not get rn 4 time at a single go
    setCounter(prevCounter=>prevCounter+1)   // it will only  increment the counter by 1 bcz the useState send the setcounter method in the form of packets as this methods are performing the same work every time.
    setCounter(prevCounter=>prevCounter+1) // use callbacks 
    setCounter(prevCounter=>prevCounter+1)

  


    console.log("clicked",counter);
    /*counter+=1;
    setCounter(counter);*/

  }

  const removeValue=()=>{
    console.log("clicked",counter);
    if(counter>0){ 
    setCounter(counter-1)
  }
}

  return (

    <>
    <h1>chai aur react</h1>
    <h2>counter value:{counter}</h2>

    <button onClick={addValue}
    >Add value</button><br/>

    <button onClick={removeValue}>remove value</button>

   </>
  )
}

export default App
