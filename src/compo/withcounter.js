import React, { Component } from 'react'

const withCounter =WrappedComponent=>{
  class withCounter extends React.Component{
    
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }
        
        incrementCount=()=>{
          this.setState(prevState=>{
            return {count: prevState.count+1}
          })
        }
      render(){
        //   return <OriginalComponent name='Stark' />
        return <WrappedComponent 
        count={this.state.count}
        incrementCount={this.incrementCount} />
      }
  } 
  return withCounter
}

export default withCounter
