import React from 'react'

function Indexkey() {
    const names=['Stark','Neo','Diana','Neo']
    const namesList=names.map((ele,index) => <h2 key={index}>{index}{ele}</h2>)
  return (
    <div>
      {namesList}
    </div>
  )
}

export default Indexkey
