// useEffect after render: for every render (dependency-1)

// import React , {useState,useEffect} from 'react'

// function Countereffect() {
//     const[count,setCount] = useState(0)

//     useEffect(()=>{
//         document.title=`you clicked ${count} times`
//         console.log('useeffect ran..');
//     })
//   return (
//     <div>
//       <button onClick={()=>setCount(count+1)}>Count {count} times</button>
//     </div>
//   )
// }

// export default Countereffect

// -------------------------------------------------------------------------------

// (dependency-3)
// useeffect conditionally run effects: this can be achieved by passing props or state inside a array.

// import React , {useState,useEffect} from 'react'

// function Countereffect() {
//     const[count,setCount] = useState(0)
//     const[name,setname]=useState('')

//     useEffect(()=>{
//         document.title=`you clicked ${count} times`
//         console.log('useeffect ran..');
//     },[count]) //whenever you click the count button the useeffect runs.

//     // useEffect(()=>{
//     //     document.title=`you clicked ${count} times`
//     //     console.log('useeffect ran..');
//     // },[name]) //whenever you give the name in textbox then the useeffect runs.

//   return (
//     <div>
//         <input type="text" value={name} onChange={e=>setname(e.target.value)} />
//       <button onClick={()=>setCount(count+1)}>Count {count} times</button>
//     </div>
//   )
// }

// export default Countereffect

// -------------------------------------------------------------------------------------------------------

// (dependency-2)
// useEffect runs effect oly once: this can be achieved by passing the second parameter as empty array.

// import React ,{useState , useEffect} from 'react'

// function Countereffect() {
//     const [x,setX] =useState(0)
//     const[y,setY] =useState(0) 

//     useEffect(()=>{
//         console.log('useEffect ran..');
//         window.addEventListener('mousemove',mouseposition) //here the mouseposition can be any name 
//         // because it is a function name that we are gng to call 
//     },[])

//     const mouseposition=(e)=>{
//         console.log('Mouse event');
//         setX(e.clientX)
//         setY(e.clientY)
//         // client is the value that will be displayed for both x and y on the browser when u move the mouse.
//     }

//   return (
//     <div>
//       <h1>Hooks X-{x} and  Y-{y}</h1>
//     </div>
//   )
// }

// export default Countereffect

// -------------------------------------------------------------------------------

// This is linked to the cleanup file.
// useEffect with cleanup:

import React ,{useState , useEffect} from 'react'

function Countereffect(){
    const[x,setX]=useState(0)
    const [y,setY]=useState(0)

    const mouseposition=(e)=>{
        console.log('mouse effect');
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect ran..!!');
        window.addEventListener('mousemove',mouseposition)

        return()=>{
            console.log('cleanup done..');
            window.removeEventListener('mousemove',mouseposition)
        }
    },[])

  
    return(
        <div>
            <h1>Hook X-{x} and Y-{y}</h1>
        </div>
    )
}
export default Countereffect




















