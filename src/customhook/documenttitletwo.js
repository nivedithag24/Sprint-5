// import React,{useState,useEffect} from 'react'

// function Documenttitletwo() {
//     let [count,setCount] =useState(0)

//     useEffect(()=>{
//         document.title=`Count ${count}`
//     },[count])
//   return (
//     <div>
//       <button onClick={()=>setCount(count+1)}>Count - {count}</button>
//     </div>
//   )
// }

// export default Documenttitletwo

// ---------------------------------------------------------------------------------

import React,{useState} from 'react'
import Usedocument from '../custom/usedocument'

function Documenttitletwo() {
    let [count,setCount] =useState(0)

    Usedocument(count)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Count - {count}</button>
    </div>
  )
}

export default Documenttitletwo