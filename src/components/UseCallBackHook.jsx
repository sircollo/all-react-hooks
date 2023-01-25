import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import Child from './Child'
export default function UseCallBackHook() {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState("Some Name")

    const returnComment = useCallback((name)=>{
        return data
    }, [data])
  return (
    <div style={{marginBottom:"50px"}}>
        <h1>useCallback Hook</h1>
        <Child returnComment={returnComment}/>
        <button
        onClick={()=>{
            setToggle(!toggle)
        }}
        >Toggle</button>
        {toggle && (
            <h2>toggle</h2>
        )}
    </div>
  )
}
