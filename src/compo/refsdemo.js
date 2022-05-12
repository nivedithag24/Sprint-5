// First approach by using createRef:

// import React, { Component } from 'react'

// class Refsdemo extends Component {
//     constructor(props) {
//       super(props)
//          this.inputRef=React.createRef()
//         //  it is common to create the refs inside the constructor so that it can be 
//         // referenced throughout the component.
//     }
//     componentDidMount(){
//         this.inputRef.current.focus()
//         console.log(this.inputRef);
//     }
//     handleClick=()=>{
// alert(this.inputRef.current.value)
//     }
//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.inputRef}/>
//         <button onClick={this.handleClick}>Click</button>
//       </div>
//     )
//   }
// }

// export default Refsdemo

// the second possible use case for using refs would be to fetch the input value so we 
// shall create a button

// -------------------------------------------------------------------------------------------------

// Second approact to call refs is by using callback refs:
import React, { Component } from 'react'

class Refsdemo extends Component {
    constructor(props) {
      super(props)
         this.inputRef=React.createRef()
         this.cbRef=null
         this.setCbRef=(element)=>{
             this.cbRef=element
         }
    }
    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef);
        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    handleClick=()=>{
    alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.setCbRef}/>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default Refsdemo


