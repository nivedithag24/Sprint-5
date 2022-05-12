// useMemo part1:

// import React ,{useState ,useCallback} from 'react'
// import Count from './count'
// import Button from './button'
// import Title from './title'

// function Parent() {
//     let [age,setAge] = useState(25)
//     let[salary,setSalary] = useState(50000)

//     let incrementAge=useCallback(()=>{
//         setAge(age+1)
//     },[age])

//     let incrementSalary=useCallback(()=>{
//         setSalary(salary+1000)
//     },[salary])

//   return (
//     <div>
//       <Title />
//       <Count text='Age' count={age} />
//       <Button handleClick={incrementAge}>Increment age</Button>
//       <Count text='Salary' count={salary} />
//       <Button handleClick={incrementSalary}>Increment salary</Button>
//     </div>
//   )
// }

// export default Parent

// ---------------------------------------------------------------------------------------

// import React,{useState} from 'react'

// function Parent() {
//   let[counterone,setCounterone]= useState(0)
//   let[countertwo,setCountertwo]=useState(0)

//   let incrementOne=()=>{
//     setCounterone(counterone+1)
//   }

//   let incrementTwo=()=>{
//     setCountertwo(countertwo+1)
//   }

//   let isEven=()=>{
//     return counterone%2==0
//   }
//   return (
//     <div>
//       <button onClick={incrementOne}>counter one {counterone}</button>
//       <span>{isEven() ? 'Even' : 'Odd'}</span><br />
//       <button onClick={incrementTwo}>Increment Two {countertwo}</button>
//     </div>
//   )
// }

// export default Parent

// -------------------------------------------------------------

import React, { useState, useMemo } from "react";

function Parent() {
  let [counterone, setCounterone] = useState(0);
  let [countertwo, setCountertwo] = useState(0);

  let incrementOne = () => {
    setCounterone(counterone + 1);
  };

  let incrementTwo = () => {
    setCountertwo(countertwo + 1);
  };

  // useMemo is a hook that will oly recompute the cached value when one of the dependencies has changed
  // this optimisation heads to avoid expensive calculation on every render.

  // useMemo works similar to useCallback hook. The difference between them is usecallback caches the provided
  // function instance itself whereas the usememo invokes the provided function and caches its result.So if you need
  // to cache a function use callback and when you need to cache the result of an invoked function use memo.

  // useMemo take two parameters and the first one is the function(in this ex it is arrow fun) whose return value needs to be cached and the other
  // one is dependency.

  let isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counterone % 2 == 0;
  }, [counterone]);

  return (
    <div>
      <button onClick={incrementOne}>counter one {counterone}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      <button onClick={incrementTwo}>Increment Two {countertwo}</button>
    </div>
  );
}

export default Parent;
