
// The function name for a custom hook should start with the word "use". 
// It is a convention and also your linters rely on this word to determine whether rules of 
// hooks apply to the function or not the custom hooks make sure to start with the word "use"


import React,{useEffect} from 'react'

function Usedocument(count) {
    useEffect(()=>{
        document.title=`Count ${count}`
    },[count])
  return (
    <div>
      
    </div>
  )
}

export default Usedocument
