// import React from 'react'
// import Usecounter from '../custom/usecounter'

// function Countertwo() {
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

// export default Countertwo

// -----------------------------------------------------------------------------

// By providing initial count

// import React from 'react'
// import Usecounter from '../custom/usecounter'

// function Countertwo() {
//   let [count,increment,decrement,reset] = Usecounter(10)
  
//   return (
//     <div>
//       <h2>Count - {count}</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default Countertwo

// ----------------------------------------------------------------------

// by giving second parameter as value:

import React from 'react'
import Usecounter from '../custom/usecounter'

function Countertwo() {
  let [count,increment,decrement,reset] = Usecounter(10,10)
  
  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Countertwo