// import React,{useState} from 'react'

// const initialState={
//     fname:'Tony',
//     sname:'Stark'
// }

// const Objectusestate = () => {
//     const [person,setPerson] =useState(initialState)

//     let handleChange=()=>{
//         // person.fname='Clark'
//         // person.sname='Kent'
//         // setPerson(person)

//         // By giving above set of codes (from 12 to 14) the object does not re-render this is because the component of the 
//         // object.algorithm that react uses when we use object as state the reference to the object must 
//         // change for the component to queue a re-render after comparing the old and new state this is the common 
//         // mistake we tend to make as beginners directly mutating the object and expecting the compon to re-render to fix
//         // this create a copy of the old state .See the below code (replace 12-14 code by 22 - 25)

//         const newPerson={...person}
//         newPerson.fname='Clark'
//         newPerson.sname='Kent'
//         setPerson(newPerson)
//     }
//     console.log('Objectuserstate render');
//   return (
//     <div>
//       <button onClick={handleChange}>{person.fname} {person.sname}</button>
//     </div>
//   )

// }

// export default Objectusestate

// this also also with the case of arrays as state so lets see an ex so create a file called arrayusestate.js.


import React ,{useState} from 'react'

const initState=['Tony','Stark']

const Arrayusestate = () => {
    let[persons,setPersons] = useState(initState)

    let handleClick=()=>{
        // persons.push('Clark')
        // persons.push('Kent')
        // setPersons(persons)

        const newPersons=[...persons]
        newPersons.push('Clark')
        newPersons.push('Kent')
        setPersons(newPersons)
    }
    console.log('Arrayusestate render');
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {
          persons.map(ele=>(
              <div key={ele}>{ele}</div>
          ))
      }
    </div>
  )
}

export default Arrayusestate

// This rendering behaviour holds good for useReducer hook as well.