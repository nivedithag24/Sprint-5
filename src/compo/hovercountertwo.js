import React, { Component } from 'react'

class Hovercountertwo extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    incrementCount=()=>{
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
    }
  render() {
      const {count} =this.state
    return (
      <div>
        <h1 onMouseOver={this.incrementCount}>Hover {count} times</h1>
      </div>
    )
  }
}

export default Hovercountertwo

// now there is requirement like the client wants the input element that counts the number 
// of key presses for ex on key up in an input element they want to increment a 
// a cunter value and display it. we can going to achieve it by either clcick 
// counter or hovercounter but you are going to realize that we are duplicating code and not 
// really reusing the functionality so there is a nedd to share this common functionality between components
// one such pattern achieving that is the higher-order component pattern which v learrned 
// in last hoc videos.

// there is also another approach well-suited for sharing functionality between 
// react components ans that is the render props pattern






