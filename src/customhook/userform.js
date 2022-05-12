// import React, { useState } from "react";

// function Userform() {
//   let [firstname, setFirstname] = useState("");
//   let [lastname, setLastname] = useState("");

//   let handleSubmit=(e)=>{
// e.preventDefault()
// alert(`Hello ${firstname} ${lastname}`)

//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="">First name : </label>
//         <input
//           type="text"
//           value={firstname}
//           onChange={(e) => {
//             setFirstname(e.target.value);
//           }}
//         />
// <br />
//         <label htmlFor="">Last name : </label>
//         <input
//           type="text"
//           value={lastname}
//           onChange={(e) => setLastname(e.target.value)}
//         />
//         <br />

//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Userform;

// ----------------------------------------

// Now let's create our custom hook what out custom hook has to do is sort of encapsulated this controlled 
//component behavior for an input element that is binding the value and onChange attributes.Let's see how 


import React from "react";
import Useinput from "../custom/useinput";

function Userform() {
  
 let[firstname,bindfirstname,resetfirstname]= Useinput('')
 let[lastname,bindlastname,resetlastname]= Useinput('')

  let handleSubmit=(e)=>{
e.preventDefault()
alert(`Hello ${firstname} ${lastname}`)
resetfirstname()
resetlastname()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">First name : </label>
        <input
          type="text"
          {...bindfirstname}
          
        />
<br />
        <label htmlFor="">Last name : </label>
        <input
          type="text"
         {...bindlastname}
        />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Userform;















