// useReducer hook:

// import React, {useReducer} from 'react'

// const initialState = 0

// const reducer=(state,action)=>{
//     switch(action){
//         case 'increment':return state+1
//         case 'decrement' : return state -1
//         case 'reset' : return initialState
//         default : return state
//     }
// }
// function Firstcounter(){
//     const[counter,dispatch]=useReducer(reducer,initialState)
//     return(
//         <div>
//             <h1>Counter : {counter}</h1>
//             <button onClick={()=>dispatch('increment')}>Incement</button>
//             <button onClick={()=>dispatch('decrement')}>Decrement</button>
//             <button onClick={()=>dispatch('reset')}>Reset</button>
//         </div>
//     )
// }
// export default Firstcounter

// --------------------------------------------OR------------------------------------------------------

// import React, { useReducer } from "react";

// const initialState = 0;

// const reducer = (currentState = initialState, action) => {
//   switch (action) {
//     case "increment":
//       return currentState + 1;
//     case "decrement":
//       return currentState - 1;
//     case "reset":
//       return initialState;
//     default:
//       return currentState;
//   }
// };
// function Firstcounter() {
//   const [counter, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h1>Counter : {counter}</h1>
//       <button onClick={() => dispatch("increment")}>Incement</button>
//       <button onClick={() => dispatch("decrement")}>Decrement</button>
//       <button onClick={() => dispatch("reset")}>Reset</button>
//     </div>
//   );
// }
// export default Firstcounter;

// --------------------------------------------------------------------------------------------

// useReducer (complex state and action):

// import React, {useReducer} from 'react'

// const initialState = {
//   firstCount:0
// }

// const reducer=(state,action)=>{
//     switch(action.type){
//         case 'increment':return {firstCount:state.firstCount + 1}
//         case 'decrement' : return {firstCount:state.firstCount-1}
//         case 'reset' : return initialState
//         default : return state
//     }
// }
// function Firstcounter(){
//     const[counter,dispatch]=useReducer(reducer,initialState)
//     return(
//         <div>
//             <h1>Counter : {counter.firstCount}</h1>
//             <button onClick={()=>dispatch({type :'increment'})}>Incement</button>
//             <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
//             <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
//         </div>
//     )
// }
// export default Firstcounter

// ---------------------------------------------------------------------------------------------------

// in the avove example action has oly one property ...we can add secon property also.so see below ex:

// import React, {useReducer} from 'react'

// const initialState = {
//   firstCount:0
// }

// const reducer=(state,action)=>{
//     switch(action.type){
//         case 'increment':return {firstCount:state.firstCount + action.value}
//         case 'decrement' : return {firstCount:state.firstCount-action.value}
//         case 'reset' : return initialState
//         default : return state
//     }
// }
// function Firstcounter(){
//     const[counter,dispatch]=useReducer(reducer,initialState)
//     return(
//         <div>
//             <h1>Counter : {counter.firstCount}</h1>
//             <button onClick={()=>dispatch({type :'increment', value:1})}>Incement</button>
//             <button onClick={()=>dispatch({type:'decrement' ,value:1})}>Decrement</button>
//             <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
//             <button onClick={()=>dispatch({type :'increment' ,value:5})}>Incement 5</button>
//             <button onClick={()=>dispatch({type:'decrement' ,value:5})}>Decrement 5</button>
//         </div>
//     )
// }
// export default Firstcounter

// -------------------------------------------------------------------------------------------------------------

// by keeping state as an object we can keep track of two different counters.

// import React, {useReducer} from 'react'

// const initialState={
//   firstCount:0,
//   secondCount:10
// }

// const reducer=(state,action)=>{
// switch(action.type){
//   case 'increment':return {...state,firstCount:state.firstCount+1}
//   case 'decrement':return {...state,firstCount:state.firstCount-1}
//   case 'increment2':return {...state,secondCount:state.secondCount+1}
//   case 'decrement2':return {...state,secondCount:state.secondCount-1}
//   case 'reset':return initialState
//   default: return state

// }
// }

// function Firstcounter(){
//  const [count,dispatch]=useReducer(reducer,initialState)
//     return(
//         <div>
//           <h1>First Counter - {count.firstCount}</h1>
//           <h1>Second Counter - {count.secondCount}</h1>
//           <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
//           <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
//           <button onClick={()=>dispatch({type:'increment2'})}>Increment 2</button>
//           <button onClick={()=>dispatch({type:'decrement2'})}>Decrement 2</button>
//           <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
//         </div>
//     )
// }
// export default Firstcounter

// from this example we got to know that we can maintain both state and action as objects.
// By using action as an object we are able to pass additional data to the reducer function.
// By using state as an object we are able to keep track of multiple state variables.


// ---------------------------------------------------------------------------------------------------------------------

// Multiple useReducers:

import React, {useReducer} from 'react'

const initialState = 0

const reducer=(state,action)=>{
    switch(action){
        case 'increment':return state+1
        case 'decrement' : return state -1
        case 'reset' : return initialState
        default : return state
    }
}
function Firstcounter(){
    const[counter,dispatch]=useReducer(reducer,initialState)
    const[counterTwo,dispatchTwo]=useReducer(reducer,initialState)
    return(
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={()=>dispatch('increment')}>Incement</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>


            <h1>Counter Two : {counterTwo}</h1>
            <button onClick={()=>dispatchTwo('increment')}>Incement</button>
            <button onClick={()=>dispatchTwo('decrement')}>Decrement</button>
            <button onClick={()=>dispatchTwo('reset')}>Reset</button>
        </div>
    )
}
export default Firstcounter


































