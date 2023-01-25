import React, {useReducer} from 'react'

export default function UseReducerHook() {
    const reducer = (state, action) => {
        switch(action.type){
            case "INCREMENT":
                return {count: state.count + 1, showText:state.showText}
            case "toggleShowText":
                return {count: state.count, showText: !state.showText}
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, {count:0, showText:true})
  return (
    <div>
        <h1>useReducer Hook</h1>
        <p>same as useState, used when in need to change more than 1 state</p>
        <h1>{state.count}</h1>
        <button onClick={() => {dispatch({type:"INCREMENT"}); dispatch({type:"toggleShowText"})}}>Click</button>
        {state.showText && (
            <p>useReducer in action</p>
        )}
    </div>
  )
}
