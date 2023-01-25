import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'

export default function UseLayoutEffectHook() {
    const inputRef = useRef(null)
    // useLayoutEffect is called first before useEffect i.e before everything is shown to user
    useLayoutEffect(()=>{
        console.log(inputRef.current.value)
    },[])
    useEffect(()=>{
        inputRef.current.value = "HELLO"
    },[])
    function handleChange(){
        console.log("input")
    }
  return (
    <div>
        <h1>useLayoutEffect Hook</h1>
        <input ref={inputRef} value="World" style={{width:400}} onChange={handleChange}/>
    </div>
  )
}
