// import React from 'react'

// function Listrendering() {
//     const names=['stark','lilly','neo']
//   return (
//     <div>
//       {names.map(ele=><h1>{ele}</h1>)}
//     </div>
//   )
// }

// export default Listrendering

// -----------------------------------------------------------

// Keeping the return statement simple by moving out the list rendering logic

// import React from 'react'

// function Listrendering() {
//     const names=['stark','lilly','neo']
//     const namesList=names.map(ele=><h1>{ele}</h1>)
//   return (
//     <div>
//       {namesList}
//     </div>
//   )
// }

// export default Listrendering

// ------------------------------------------------------------------------

// import React from "react";

// function Listrendering() {
//   const personList = [
//     {
//       Id: 1,
//       name: "Stark",
//       skill: "Reactjs",
//     },
//     {
//       Id: 2,
//       name: "Neo",
//       skill: "HTML",
//     },
//   ];
//   const res = personList.map((ele) => (
//     <h1>
//       I am {ele.name} and I'm good at {ele.skill}
//     </h1>
//   ));
//   return <div>{res}</div>;
// }

// export default Listrendering;

// ----------------------------------------------------------------------

import React from "react";
import Listrenderingchild from "./listrenderingchild";
function Listrendering() {
    const personList = [
      {
        id: 1,
        name: "Stark",
        skill: "Reactjs",
      },
      {
        id: 2,
        name: "Neo",
        skill: "HTML",
      },
    ];
    const res = personList.map((ele) => (
      <Listrenderingchild key={ele.id} ele={ele}/>
    ));
    return <div>{res}</div>;
  }
  
  export default Listrendering;