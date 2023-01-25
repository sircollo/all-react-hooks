import React, {useRef} from 'react'
import { useState } from 'react'

export default function UseRefHook() {
    const inputRef = useRef("null")
    const [text, setText] = useState("Text")

    function onClick(){
        inputRef.current.focus()
        setText(inputRef.current.value)
        inputRef.current.value = ""
    }
  return (
    <div style={{marginBottom:"20px"}}>
        <h1>useRef Hook</h1>
        <h1>{text}</h1>
        <input type="text" placeholder="Some text..." ref={inputRef}/>
        <button onClick={onClick}>Change Name</button>
    </div>
  )
}
