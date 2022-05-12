import React, {useState,useEffect} from 'react'
import Countereffect from './countereffect'

function Cleanup() {
    const[display,setDisplay] =useState(true)
  return (
    <div>
        <button onClick={()=>setDisplay(false)}>Toggle display</button>
        {display && <Countereffect /> }
      
    </div>
  )
}

export default Cleanup
