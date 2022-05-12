// Higher order components:

// import React, { Component } from 'react'

// class Clickcounter extends Component {
// constructor(props) {
//   super(props)

//   this.state = {
//      count:0
//   }
// }

// incrementCount=()=>{
//   this.setState(prevState=>{
//     return {count: prevState.count+1}
//   })
// }
//   render() {
//     const {count}=this.state
//     return (
//       <div>
//         <button onClick={this.incrementCount}>Click {count} times</button>
//       </div>
//     )
//   }
// }

// export default Clickcounter

// -------------------------------------------------------------------------


// HOC -part2:

import React, { Component } from 'react'
import withCounter from './withcounter'

class Clickcounter extends Component {
// constructor(props) {
//   super(props)

//   this.state = {
//      count:0
//   }
// }

// incrementCount=()=>{
//   this.setState(prevState=>{
//     return {count: prevState.count+1}
//   })
// }
  render() {
    // const {count}=this.state
    const {count,incrementCount}=this.props

    return (
      <div>
        <button onClick={incrementCount} > Click {count} times</button>
      </div>
    )
  }
}

export default withCounter(Clickcounter) 





















