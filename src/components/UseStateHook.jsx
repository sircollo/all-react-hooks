import React from 'react'
import { useState } from 'react'

export default function UseStateHook() {
    const [counter, setCounter] = useState(0)
    const [inputValue, setInputValue] = useState("")

    function handleClick(){
        setCounter(counter + 1)
    }
    function handleChange(e){
        let typedValue = e.target.value
        setInputValue(typedValue)
    }
  return (
    <div style={{textAlign:"center"}}>
        <div>
        <h1>useState Hook</h1>
        <h3>{counter}</h3>
        <button onClick={()=>handleClick()}>Increment</button>
        </div>
        <div style={{marginTop:"20px"}}>
        <input placeholder='Type something' onChange={handleChange}/>
        <p>{inputValue}</p>
        </div>
    </div>
  )
}
