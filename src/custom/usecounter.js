// Instead of returning jsx our custom hook is going to return an array of values
// 

// import {useState} from 'react'

// function Usecounter() {
//     let [count,setCount] = useState(0)

//     let increment=()=>{
//         setCount(prevCount=> prevCount +1)
//     }
//     let decrement=()=>{
//         setCount(prevCount=> prevCount -1)
//     }
// let reset=()=>{
//     setCount(0)
// }
//   return [count,increment,decrement,reset]
// }

// export default Usecounter

// ------------------------------------------------------------------------------------

// By providing initial count

// import {useState} from 'react'

// function Usecounter(initialCount=0 ) {
//     let [count,setCount] = useState(initialCount)

//     let increment=()=>{
//         setCount(prevCount=> prevCount +1)
//     }
//     let decrement=()=>{
//         setCount(prevCount=> prevCount -1)
//     }
// let reset=()=>{
//     setCount(initialCount)
// }
//   return [count,increment,decrement,reset]
// }

// export default Usecounter

// ------------------------------------------------------------------------------

// by giving second parameter as value:

import {useState} from 'react'

function Usecounter(initialCount=0 ,value) {
    let [count,setCount] = useState(initialCount)

    let increment=()=>{
        setCount(prevCount=> prevCount + value)
    }
    let decrement=()=>{
        setCount(prevCount=> prevCount - value)
    }
let reset=()=>{
    setCount(initialCount)
}
  return [count,increment,decrement,reset]
}

export default Usecounter














