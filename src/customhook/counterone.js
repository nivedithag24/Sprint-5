// import React from 'react'
// import Usecounter from '../custom/usecounter'

// function Counterone() {
  
//   let [count,increment,decrement,reset] = Usecounter()

//   return (
//     <div>
//       <h2>Count - {count}</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default Counterone

// ----------------------------------------------------------------------------

// By providing initial count

// import React from 'react'
// import Usecounter from '../custom/usecounter'

// function Counterone() {
  
//   let [count,increment,decrement,reset] = Usecounter()

//   return (
//     <div>
//       <h2>Count - {count}</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default Counterone

// --------------------------------------------------------------------------

// by giving second parameter as value:

import React from 'react'
import Usecounter from '../custom/usecounter'

function Counterone() {
  
  let [count,increment,decrement,reset] = Usecounter(0,1)

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counterone