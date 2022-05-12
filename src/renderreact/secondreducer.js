
import React, {useState,useReducer} from 'react'

let initialState=0

let reducer=(state,action)=>{
switch(action){
  case 'increment': return state+1
  case 'decrement': return state-1
  case 'reset': return initialState
  default:return state
}
}

const Secondreducer = () => {
  let [count,dispatch]=useReducer(reducer,initialState)
  console.log('reducer render');
  return (
    <div>
      <h1>count - {count}</h1>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Secondreducer

