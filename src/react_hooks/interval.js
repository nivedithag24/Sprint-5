// import React,{useState,useEffect} from 'react'

// function Interval() {
//     const[count,setCount] =useState(0)

//     const tick=()=>{
//         setCount(count+1)
//     }

//     useEffect(()=>{
//         const interval=setInterval(tick,1000)
//         return ()=>{
//             clearInterval(interval)
//         }
//     })

//     // useEffect(()=>{
//     //     const interval=setInterval(tick,1000)
//     //     return ()=>{
//     //         clearInterval(interval)
//     //     }
//     // },[])

//     // useEffect(()=>{
//     //     const interval=setInterval(tick,1000)
//     //     return ()=>{
//     //         clearInterval(interval)
//     //     }
//     // },[count])

//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   )
// }

// export default Interval

// // ----------------------------------------------------------------------------

// useEffect with incorrect dependency:

// import React,{useState,useEffect} from 'react'

// function Interval() {
//     const[count,setCount] =useState(0)

//     const tick=()=>{
//         setCount(count+1)
//     }

//     useEffect(()=>{
//         function dosomething(){
//             console.log('someProps');
//         }
//         dosomething()
//         const interval=setInterval(tick,1000)
//         return ()=>{
//             clearInterval(interval)
//         }
//     },[something])
//     return (
//         <div>
//           <h1>{count}</h1>
//         </div>
//       )
//     }
    
//     export default Interval