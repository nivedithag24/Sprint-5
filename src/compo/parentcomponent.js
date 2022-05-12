import React, { Component } from 'react'
import Regularcompo from './regularcompo'
import Purecompo from './purecompo'

 class Parentcomponent extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'Stark'
       }
     }
     componentDidMount(){
         setInterval(()=>{
             this.setState({
                 name:'Stark'
             })
         },2000)
     }
  render() {
    return (
      <div>
        Parent component
        <Regularcompo name={this.state.name}></Regularcompo>
        <Purecompo name={this.state.name}></Purecompo>
      </div>
    )
  }
}

export default Parentcomponent
