// useRef hook part-2:

import React ,{useState,useEffect,useRef}from 'react'

function Timer() {
    let [timer,setTimer]=useState(0)
let intervalRef=useRef()
    useEffect(()=>{
    intervalRef.current=setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)
        return()=>{
            clearInterval(intervalRef.current)
        }
    },[])
  return (
    <div>
      <h1>Hook Timer-{timer}</h1>
      <button onClick={()=>clearInterval(intervalRef.current)}>Clear Timer</button>
    </div>
  )
}

export default Timer

// The problem interval is not defined and this is rightly so because the variable is copied only to the 
// effect hook so we can clear the interval from within the effect hook but not from an event handler 
// this is where useRef comes to the rescue.Although useRef can hold a reference to a DOM node using 
// the ref attribute it can also be used to store any mutable  

// It can be used to create a generic container which can hold a mutable value similar to instance 
// properties on a class components .This generic containers does not cause rerenders when the data it stores
// changes at the same time it also remembers the stores data even after other state variables caused 
// a rerendered of this component a simple usecase is clearing an interval timer from an even





































