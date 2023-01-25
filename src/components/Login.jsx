import React, {useContext} from 'react'
import { AppContext } from './UseContextHook'
export default function Login() {
    const {setUsername} = useContext(AppContext)
  return (
    <div>
        <input type="text" placeholder="Username" onChange={(e)=>{
            setUsername(e.target.value)
        }}/>
    </div>
  )
}
