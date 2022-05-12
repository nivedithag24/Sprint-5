// import React, { Component } from 'react'
// import ComponentF from './componentF'

// class ComponentE extends Component {
//   render() {
//     return (
//       <div>
//         <ComponentF />
//       </div>
//     )
//   }
// }

// export default ComponentE

// ------------------------------------------------------------


// part3:second point

// import React, { Component } from 'react'
// import ComponentF from './componentF'
// import UserContext from './usercontext'

// class ComponentE extends Component {
//   render() {
//     return (
//       <div>
//           Component E context {this.context}
//         <ComponentF />
//       </div>
//     )
//   }
// }

// ComponentE.contextType=UserContext
// export default ComponentE

// ------------------------------------------OR---------------------------

import React, { Component } from 'react'
import ComponentF from './componentF'
import UserContext from './usercontext'

class ComponentE extends Component {
    static contextType =UserContext
  render() {
    return (
      <div>
          Component E context {this.context}
        <ComponentF />
      </div>
    )
  }
}

export default ComponentE