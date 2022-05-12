// STATE:

// import React , {Component} from 'react' 

// class Message extends Component{
//     constructor(){
//         super()
//         this.state={
//             message:'Welcome to React tutorial..!!'
//         }
//     }
//     render(){
//         return (
//             <div>
//                 <h1>{this.state.message}</h1>
//             </div>
//         )
//     }
// }

// export default Message

// -----------------------------------------------------------------------------

// How to update the state:

import React , {Component} from 'react' 

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome to Reactjs tutorial..!!'
        }
    }

    changeMessage(){
this.setState({
    message:"Thank you for attending..!!"
})
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Click here</button>
            </div>
        )
    }
}

export default Message




















