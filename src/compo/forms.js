// import React, { Component } from "react";

// class Forms extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       comments: "",
//       topic:'react'
//     };
//   }

//   handleusernameChange = (e) => {
//     this.setState({
//       username: e.target.value,
//     });
//   };

//   handlecommentsChange=(e)=>{
//       this.setState({
//           comments:e.target.value
//       })
//   }

//   handlechangeTopic=(e)=>{
//       this.setState({
//           topic:e.target.value
//       })
//   }

//   handleSubmit=(e)=>{
//       e.preventDefault()
//       alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Username :</label>
//           <input
//             type="text"
//             value={this.state.username}
//             onChange={this.handleusernameChange}
//           />
//           <div>
//             <label htmlFor="">Comments :</label>
//             <textarea
//               cols="20"
//               rows="1"
//               value={this.state.comments}
//               onChange={this.handlecommentsChange}
//             ></textarea>
//           </div>
//           <div>
//               <label htmlFor="">Select :</label>
//               <select name="" id="" value={this.state.topic} onChange={this.handlechangeTopic}>
//                   <option value="react">React</option>
//                   <option value="html">HTML</option>
//                   <option value="css">CSS</option>
//               </select>
//           </div>
//           <button type='submit'>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Forms;

// --------------------------------------------------------------------------

// Destructuring of forms:

import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handleusernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handlecommentsChange = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };

  handlechangeTopic = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
  };
  render() {
    const { username, comments, topic } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username :</label>
          <input
            type="text"
            value={username}
            onChange={this.handleusernameChange}
          />
          <div>
            <label htmlFor="">Comments :</label>
            <textarea
              cols="20"
              rows="1"
              value={comments}
              onChange={this.handlecommentsChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Select :</label>
            <select
              name=""
              id=""
              value={topic}
              onChange={this.handlechangeTopic}
            >
              <option value="react">React</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Forms;
