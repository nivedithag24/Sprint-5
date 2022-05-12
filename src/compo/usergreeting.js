// if else:

// import React, { Component } from 'react'

//  class Usergreeting extends Component {
//      constructor(props) {
//        super(props)

//        this.state = {
//           isloggedin :false
//        }
//      }

//   render() {
//       if(this.state.isloggedin){
//           return (
//               <div><h1>Welcome Stark</h1></div>
//           )
//       }
//       else {
//           return(
//               <div><h1>Welcome Neo</h1></div>
//           )
//       }
//     // return (
//     //   <div>
//     //     <h1>Welcome Stark</h1>
//     //     <h1>Welcome Neo</h1>
//     //   </div>
//     // )
//   }
// }

// export default Usergreeting

// ------------------------------------------------------------------

// Element variables:

// import React, { Component } from 'react'

//  class Usergreeting extends Component {
//      constructor(props) {
//        super(props)

//        this.state = {
//           isloggedin :false
//        }
//      }

//   render() {
//      let message
//      if(this.state.isloggedin){
//          message = <div>Welcome Stark</div>
//      }
//      else {
//         message = <div>Welcome Neo</div>
//      }

//      return(
//          <div>{message}</div>
//      )
//     // return (
//     //   <div>
//     //     <h1>Welcome Stark</h1>
//     //     <h1>Welcome Neo</h1>
//     //   </div>
//     // )
//   }
// }

// export default Usergreeting

// --------------------------------------------------------------

// Ternary ocnditional operator:

// import React, { Component } from "react";

// class Usergreeting extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isloggedin: true,
//     };
//   }

//   render() {
//     return this.state.isloggedin ? (
//       <div>Welcome stark</div>
//     ) : (
//       <div>Welcome Neo</div>
//     );
//   }
// }

// export default Usergreeting;

// -----------------------------------------------------------------------

// Short circuit operator:

import React, { Component } from "react";

class Usergreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloggedin: true,
    };
  }

  render() {
   return this.state.isloggedin && <div>Welcome stark</div>
//    in this first it checks the value on the LHS if it is true then it checks the value 
// or it prints the value tht is present on the RHS. If the LHS is false then it never checks for the 
// value on the RHS.

  }
}

export default Usergreeting;

