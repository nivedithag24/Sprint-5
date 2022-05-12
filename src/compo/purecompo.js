import React, { PureComponent } from 'react'

class Purecompo extends PureComponent {
  render() {
    return (
      <div>
        Pure component {this.state.name}
      </div>
    )
  }
}

export default Purecompo
