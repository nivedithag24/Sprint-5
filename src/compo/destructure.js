// Destructuring using functional component:

// method-1:

// import React from 'react'

// function Destructure({name,age}) {
//   return (
//     <div>
//       <h1>Hi, i am {name} and my age is {age} </h1>
//     </div>
//   )
// }

// export default Destructure

// ---------------------------------------------------------------
// method-2:

// import React from 'react'

// function Destructure(props) {
//     const {name,age}=props
//   return (
//     <div>
//       <h1>Hi, i am {name} and my age is {age} </h1>
//     </div>
//   )
// }

// export default Destructure

// -------------------------------------------------------------------

// Destructuring using class component:

// method-1:

// import React ,{Component} from 'react'

// class Destructure extends Component{
    
//     render(){
//         const {name,age} =this.props
//         return(
//             <div>
//                 <h1>Hi, i am {name} and my age is {age} </h1>
//             </div>
//         )
//     }
// }

// export default Destructure

// ------------------------------------------------------------------
// similarly how to destructure for states:

// import React ,{Component} from 'react'

// class Destructure extends Component{
    
//     render(){
//         const {name,age} =this.props
//         // const {state1,state2} =this.state
//         return(
//             <div>
//                 <h1>Hi, i am {name} and my age is {age} </h1>
//             </div>
//         )
//     }
// }

// export default Destructure






















