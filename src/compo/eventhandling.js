// Event handling using functional component

// import React from 'react'

// const Eventhandling=()=> {
//    let handleClick=()=>{
//       console.log('button clicked!');
//     }
//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }
// export default Eventhandling

// ----------------------------------------------------------------

// Event handling using class component

import React, { Component } from 'react'

class Eventhandling extends Component {
    handleClick(){
        console.log('you clicked the button! ');
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click here</button>
      </div>
    )
  }
}

export default Eventhandling












