import React from 'react'

function Memo({name}) {
    console.log('Rendering memo compo');
  return (
    <div>
      {name}
    </div>
  )
}

export default Memo
