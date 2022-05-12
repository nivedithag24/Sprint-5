// import React from 'react'

// function Greet() {
//   return (
//     <div>
//       <h1>Functional component</h1>
//     </div>
//   )
// }

// export default Greet

// -------------------------------------------------------

// const Greet =()=>{
//     return (
//         <div>
//             <h1>Functional component</h1>
//         </div>
//     )
// }
// export default Greet

// ---------------------------------------------------------

// export const Greet = () =>{
//     return (
//         <div>
//             <h1>Functional component</h1>
//         </div>
//     )
// }

// -------------------------------------------------------------

// PROPS:

// function Greet(props) {
//   return (
//     <div>
//       <h1>Hello, {props.name} a.k.a {props.heroname}</h1>
//     </div>
//   )
// }

// export default Greet



import React from 'react'

function Greet(props) {
    return (
      <div>
        <h1>Hello, {props.name} a.k.a {props.heroname}</h1>
        {props.children}
      </div>
    )
  }
  
  export default Greet






