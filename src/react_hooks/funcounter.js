// counter program using functional component :

// import React from 'react'
// import { useState } from 'react'

// function Funcounter() {

//     const [count,setCount]=useState(0)

//     const handleClick=()=>{
//         setCount(count+1)
//     }
//   return (
//     <div>
//       <button onClick={handleClick}>Count {count}</button>
//     </div>
//   )
// }

// export default Funcounter

// --------------------------------------------------------------------------

// or

// import React from "react";
// import { useState } from "react";

// function Funcounter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button onClick={()=>setCount(count+1)}>Count {count}</button>
//     </div>
//   );
// }

// export default Funcounter;




import React from "react";
import { useState } from "react";

function Funcounter() {
  const [count, setCount] = useState(0);

  let handleClick=()=>{
    if(count==0){
      setCount(count+1)
    }
    else if(count<5){
      setCount(count+1)
    }
  }
  return (
    <div>
      <button onClick={handleClick}>Count {count}</button>
    </div>
  );
}

export default Funcounter;


// -------------------------------------------------------------------------------------

// import React from "react";
// import { useState } from "react";

// function Funcounter() {
//   const [count, setCount] = useState(0);

//   const increment=()=>{
//       setCount(count+1)
//   }

//   const decrement=()=>{
//     setCount(count-1)
// }

// const reset=()=>{
//     setCount(0)
// }
//   return (
//     <div>
//         <h1>Count : {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default Funcounter;

// ---------------------------------OR-------------------------------------------
// import React from "react";
// import { useState } from "react";

// function Funcounter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//         <h1>Count : {count}</h1>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//       <button onClick={()=>setCount(count-1)}>Decrement</button>
//       <button onClick={()=>setCount(0)}>Reset</button>
//     </div>
//   );
// }
// export default Funcounter;

// The above way of writing code is a unsafe way.. although we are getting output
// it is not the right way to change the count value. Let me show you the unlikely piece of code you would
// implement . check below example that is with the help of previoustate .

// tutorial previous state with usestate hook:

// import React from "react";
// import { useState } from "react";

// function Funcounter() {
//   const [count, setCount] = useState(0);

//   const incrementfive =()=>{
// for(let i=0;i<5;i++){
//     setCount(prevCount => prevCount + 1)
// }
//   }
//   return (
//     <div>
//         <h1>Count : {count}</h1>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//       <button onClick={()=>setCount(count-1)}>Decrement</button>
//       <button onClick={()=>setCount(0)}>Reset</button>
//       <button onClick={incrementfive}>Increment 5</button>
//     </div>
//   );
// }
// export default Funcounter;

// ---------------------------------------------------------------------------------------------------

// useState with object:

// import React, { useState } from "react";

// function Funcounter() {
//   const [name, setName] = useState({ firstname: "", lastname: "" });

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           value={name.firstname}
//           onChange={(e) => setName({ ...name, firstname: e.target.value })}
//         />
//         <input
//           type="text"
//           value={name.lastname}
//           onChange={(e) => setName({ ...name, lastname: e.target.value })}
//         />
//       </form>

//       <h1>First name : {name.firstname}</h1>
//       <h1>Last name : {name.lastname}</h1>
//       <h1>{JSON.stringify(name)}</h1>
//     </div>
//   );
// }

// export default Funcounter;

// -------------------------------------------------------------------------------------------

// useState using arrays:

// import React , {useState} from 'react'

// export default function Funcounter() {

//     const[items,setItems] = useState([])

//     const additem=()=>{
//         setItems([...items,{
//             id:items.length,
//             value:Math.floor(Math.random()*10) +1
//         }])}
//   return (
//     <div>
//         <button onClick={additem}>Add a number</button>
//       <ul>
//           {items.map(item=>(
//               <li key={item.id}>{item.value}</li>
//           ))}
//       </ul>
//     </div>
//   )
// }




















