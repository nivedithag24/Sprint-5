// When you hover on the heading tag the count value should get increased.

// import React, { Component } from 'react'

//  class Hovercounter extends Component {
//     constructor(props) {
//         super(props)
      
//         this.state = {
//            count:0
//         }
//       }
      
//       incrementCount=()=>{
//         this.setState(prevState=>{
//           return {count: prevState.count+1}
//         })
//       }
//   render() {
//       const {count} =this.state
//     return (
//       <div>
//         <h1 onMouseOver={this.incrementCount}>Hover {count} times</h1>
//       </div>
//     )
//   }
// }

// export default Hovercounter
// ---------------------------------------------------------------------------------------------

// now if the client want the input element that counts the number of key presses.
// HOC-part2

import React, { Component } from 'react'
import withCounter from './withcounter'

 class Hovercounter extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
      
    //   incrementCount=()=>{
    //     this.setState(prevState=>{
    //       return {count: prevState.count+1}
    //     })
    //   }
  render() {
      const {count,incrementCount} =this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
      </div>
    )
  }
}

export default withCounter(Hovercounter)

































