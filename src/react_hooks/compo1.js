// React context:

// import React,{useState} from 'react'
// import Compo2 from './compo2'
// function Compo1() {
//     const[user,setUser]=useState('jay')
//   return (
//     <div>
//       <h1>Hello {user} !!</h1>
//       <Compo2 user={user} />
//     </div>
//   )
// }

// export default Compo1

// ------------------------------------------------------------------------------

// Create context:

// import React, { useState,createContext } from "react";
// import Compo2 from "./compo2";

// const UserContext = React.createContext();
// function Compo1() {
//   Const[user, setUser] = useState("jay");
//   return (
//     <div>
//       <UserContext.Provider value={user}>
//         <h1>Hello {user} !!</h1>
//         <Compo2 user={user} />
//         </UserContext.Provider>
//     </div>
//   );
// }
// export default Compo1
