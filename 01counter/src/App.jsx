import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [count , setcount] =  useState(0) 
 
  //let count = 1 

  const addValue = ()=>{

    if(count < 20 ){

      count = count + 1 ; 
      console.log("clicked " , count)
      setcount(count)
    }
  }

  const decValue = ()=>{

    if(count > 0 ){
      
      count = count - 1 ; 
      console.log("clicked " , count)
      setcount(count)
    }
  }

  return (
    <>
      <h1> Chai aur react </h1>
      <h2> Counter value : {count } </h2>

      <button  onClick={addValue}> Add Value {
        count } </button>
      <br/>
      <button onClick={decValue}>Decrese  Value {count} </button>


       
    </>
  )
}

export default App
