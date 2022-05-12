// import React, { Component } from 'react'
// class LifecycleA extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          name:'Stark'
//       }
//       console.log('LifecycleA constructor');
//     }
    
//     static getDerivedStateFromProps(props,state){
//         console.log('LifecycleA getDerivedStateFromProps');
//         return null
//     }

//     componentDidMount(){
//         console.log('LifecyleA componentDidMount');
//     }
//   render() {
//       console.log('LifecycleA render');
//     return (
//       <div>
//        Lifecycle A
//       </div>
//     )
//   }
// }

// export default LifecycleA

// ----------------------------------------------------------------------------------

// lets see when the component has a child component:

import React, { Component } from 'react'
import LifecycleB from './lifecycleB';
class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Stark'
      }
      console.log('LifecycleA constructor');
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('LifecyleA componentDidMount');
    }
  render() {
      console.log('LifecycleA render');
    return (
      <div>
       Lifecycle A
       <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA


