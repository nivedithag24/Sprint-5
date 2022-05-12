import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        {this.props.render(true)}
      </div>
    )
  }
}

export default User

// in react it is possible to use a prop whose value is a function to control what is 
// actually rendered by a component.