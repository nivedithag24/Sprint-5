// part2:


// import React from 'react'

// const UserContext= React.createContext()

// const UserProvider = UserContext.Provider
// const UserConsumer = UserContext.Consumer

// export {UserProvider ,UserConsumer }

// ----------------------------------------------------------------

// part3: First point

// import React from 'react'

// const UserContext= React.createContext('Codeevolution')

// const UserProvider = UserContext.Provider
// const UserConsumer = UserContext.Consumer

// export {UserProvider ,UserConsumer }

// ---------------------------------------------------------------

// part3: Second point

import React from 'react'

const UserContext= React.createContext('Codeevolution')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider ,UserConsumer }
export default UserContext
// after this go to the componentE file