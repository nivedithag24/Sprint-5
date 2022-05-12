// import React, { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0,
//     };
//   }

//   increment() {
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   }

//   decrement() {
//     this.setState({
//       counter: this.state.counter - 1,
//     });
//   }

//   reset() {
//     this.setState({
//       counter: 0,
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Counter -{this.state.counter}</h1>
//         <button onClick={() => this.increment()}>Increment</button>
//         <button onClick={() => this.decrement()}>Decrement</button>
//         <button onClick={() => this.reset()}>Reset</button>
//       </div>
//     );
//   }
// }

// export default Counter;

// ----------------------------------------------------------------------------------

// setState takes two parameters : for ex look below program

// import React, { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0,
//     };
//   }

//   increment() {
//     this.setState({
//       counter: this.state.counter + 1,
//     },
//     ()=>console.log('callback value' , this.state.counter));
//   }

//   decrement() {
//     this.setState({
//       counter: this.state.counter - 1,
//     },()=>{console.log('callback value',this.state.counter)});
//   }

//   reset() {
//     this.setState({
//       counter: 0,
//     },()=>{console.log('callback value',this.state.counter)});
//   }
//   render() {
//     return (
//       <div>
//         <h1>Counter -{this.state.counter}</h1>
//         <button onClick={() => this.increment()}>Increment</button>
//         <button onClick={() => this.decrement()}>Decrement</button>
//         <button onClick={() => this.reset()}>Reset</button>
//       </div>
//     );
//   }
// }

// export default Counter;

// -----------------------------------------------------------------------------------------

// import React, { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0,
//     };
//   }

//   increment() {
//     this.setState((prevState) => ({
//       counter: prevState.counter + 1,
//     }));
//     console.log(this.state.counter);
//   }
//   incrementFive() {
//     this.increment();
//     this.increment();
//     this.increment();
//     this.increment();
//     this.increment();
//   }

//   render() {
//     return (
//       <div>
//         <h1>Counter -{this.state.counter}</h1>
//         <button onClick={() => this.incrementFive()}>Increment</button>
//         {/* <button onClick={() => this.decrement()}>Decrement</button>
//             <button onClick={() => this.reset()}>Reset</button> */}
//       </div>
//     );
//   }
// }

// export default Counter;
