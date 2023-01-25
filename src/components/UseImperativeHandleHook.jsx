import React, {useRef} from 'react'
import Button from './Button'
export default function UseImperativeHandleHook() {
    const buttonRef = useRef(null)
  return (
    <div>
        <h1>UseImperativeHandle Hook</h1>
        <button onClick={()=>{buttonRef.current.alterToggle()}}>Button From Parent</button>
        <Button ref={buttonRef}/>
    </div>
  )
}
