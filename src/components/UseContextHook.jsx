import React from 'react'
import Login from './Login'
import User from './User'
import { createContext, useState } from 'react'

export const AppContext = createContext(null)
export default function UseContextHook() {
    
    const [username, setUsername] = useState("")
  return (
    <AppContext.Provider style={{marginTop:"30px"}} value={{username, setUsername}}>
        <Login/>
        <User/>
    </AppContext.Provider>
  )
}
