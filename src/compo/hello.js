// using jsx:

// import React from 'react'

// const Hello =()=>{
//     return(
//         <div className="hello_jsx">
//             <h1>Hello lilly!!</h1>
//         </div>
//     )
// }

// export default Hello

// ------------------------------------------------------------------

// without jsx:

import React from 'react'

const Hello =()=>{
    // return React.createElement('div' ,null ,'hello lilly')

    // return React.createElement('div' ,null ,React.createElement('h1',null,'hello lilly'))

    return React.createElement('div' ,
    {id:'intro' , className:'first'} ,
    React.createElement('h1',null,'hello lilly'))
}

export default Hello









