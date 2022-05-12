// Binding events: This is by class components

// first approach: Binding in render
// This approach is not used because of performance implications.

// import React, { Component } from 'react'

// class Eventbind extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          message:'hello'
//       }
//     }
//     handleChange(){
//         this.setState({
//             message:'Good bye..'
            
//         })
//         console.log('good bye');
//     }
    
//   render() {
//     return (
//       <div>
//           <h1>{this.state.message}</h1>
//         {/* <button onClick={this.handleChange}>Click</button> */}
//         <button onClick={this.handleChange.bind(this)}>Click</button>
//       </div>
//     )
//   }
// }

// export default Eventbind

// ---------------------------------------------------------------------------------------

// Second approach: By using arrow functions in the render method.
// It is the easiest way to pass parameters.

// import React, { Component } from 'react'

// class Eventbind extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          message:'hello'
//       }
//     }
//     handleChange(){
//         this.setState({
//             message:'Good bye..'
            
//         })
//         console.log('good bye');
//     }
    
//   render() {
//     return (
//       <div>
//           <h1>{this.state.message}</h1>
//         <button onClick={()=>this.handleChange()}>Click</button>
//       </div>
//     )
//   }
// }

// export default Eventbind

// --------------------------------------------------------------------------------

// Third approach: Binding in the class constructor(Binding the event handler in the constructor  
// as opposed to binding in the render method )
// This is the best approach.

// import React, { Component } from 'react'

// class Eventbind extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          message:'hello'
//       }

//       this.handleChange=this.handleChange.bind(this)
//     }
//     handleChange(){
//         this.setState({
//             message:'Good bye..'
            
//         })
//         console.log('good bye');
//     }
    
//   render() {
//     return (
//       <div>
//           <h1>{this.state.message}</h1>
//         <button onClick={this.handleChange}>Click</button>
//       </div>
//     )
//   }
// }

// export default Eventbind

// ------------------------------------------------------------------------------

// Fourth approach: By using an arrow function as a class property.
// we can even stick on this approach.

import React, { Component } from 'react'

class Eventbind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }

    }
    handleChange=()=>{
        this.setState({
            message:'Good bye..'
            
        })
        console.log('good bye');
    }
    
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
        <button onClick={this.handleChange}>Click</button>
      </div>
    )
  }
}

export default Eventbind
































