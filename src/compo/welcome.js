import React ,{Component} from 'react'

// class Welcome extends Component{
//     render(){
//         return (
//             <div>
//                 <h1>Class Component</h1>
//             </div>
//         )
//     }
// }
// export default Welcome

// ------------------------------------------------------------

// PROPS USING CLASS COMPONENT:

class Welcome extends Component{
    render(){
        return (
            <div>
                <h1>{this.props.name} a.k.a {this.props.heroname}</h1>
                {this.props.children}
            </div>
        )
    }
}
export default Welcome




