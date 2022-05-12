// import React from 'react'

// function Childcompo(props) {
//   return (
//     <div>
//       <button onClick={props.greetHandler}>Greet Parent</button>
//     </div>
//   )
// }

// export default Childcompo

// ----------------------------------------------------------------------------

// using arrow function:

import React from 'react'

function Childcompo(props) {
  return (
    <div>
      <button onClick={()=>props.greetHandler('Lilly')}>Greet Parent</button>
    </div>
  )
}

export default Childcompo