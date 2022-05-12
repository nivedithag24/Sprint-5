import React from 'react'

function Column() {
    const items=[]
  return (
    <React.Fragment>
        {
            items.map(item=>(
                <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        }
      <td>Name</td>
      <td>Stark</td>
    </React.Fragment>
  )
}

export default Column

// -----------------OR------------------------------------------------------------------
// this represents the idea that it won't add an actual
// element to the dom.If you use this shortand syntax there is one
//  limitation you cannot pass in key attribute


// import React from 'react'
// function Column() {
//     const items=[]
//   return (
//     <>
        
//       <td>Name</td>
//       <td>Stark</td>
//     </>
//   )
// }

// export default Column