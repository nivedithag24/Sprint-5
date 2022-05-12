import {useState} from 'react'

function Useinput(initialValue) {
  let[value,setValue]=useState(initialValue)

  let reset=()=>{
      setValue(initialValue)
  }
  let bind={
      value,
      onChange:e=>{
          setValue(e.target.value)
      }
  }
  return[value,bind,reset]
}

export default Useinput
