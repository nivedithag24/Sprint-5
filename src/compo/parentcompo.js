// import React, { Component } from 'react'
// import Childcompo from './childcompo'
// class Parentcompo extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          parentname:'Parent'
//       }
//       this.greetParent = this.greetParent.bind(this)
//     }
    
//     greetParent(){
//         alert(`Hello ${this.state.parentname}`)
//     }

//   render() {
//     return (
//       <div>
//         <Childcompo  greetHandler={this.greetParent} />
//       </div>
//     )
//   }
// }

// export default Parentcompo

// -------------------------------------------------------------------

// using arrow function:
import React, { Component } from 'react'
import Childcompo from './childcompo'
class Parentcompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname:'Parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(childName){
        alert(`Hello ${this.state.parentname} from ${childName}`)
    }

  render() {
    return (
      <div>
        <Childcompo  greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default Parentcompo