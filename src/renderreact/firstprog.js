// this is common ex:

// import React,{useState} from 'react'

// const Firstprog = () => {
//     let [count,setCount] =useState(0)
//     console.log('Usestate render');
//   return (
//     <div>
//       <button onClick={()=>setCount((c)=>c+1)}>Count -{count}</button>
//     </div>
//   )
// }

// export default Firstprog

// ----------------------------------------------------------------------------

// now let us understand the rerender behaviour wrt render and commit phase. 
// now what is a special case with usestate and re-rendering is if you update a state hook to the same 
// value as the current state react may render that compo one more time and bail out from subsequent renders.
// lets try to understand now with the example 

import React,{useState} from 'react'

const Firstprog = () => {
    let [count,setCount] =useState(0)
    console.log('Usestate render');
  return (
    <div>
      <button onClick={()=>setCount((c)=>c+1)}>Count -{count}</button>
      <button onClick={()=>setCount(0)}>Count to 0</button>
      <button onClick={()=>setCount(5)}>Count to 5</button>
    </div>
  )
}

export default Firstprog