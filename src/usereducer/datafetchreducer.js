// Fetching data using useReducer part1: using useState and useEffect

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Datafetchreducer() {
// var[loading,setLoading] =useState(true)
//   const [error, setError] = useState("");
//   const [post, setPost] = useState({});

//   useEffect(()=>{
//       axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     //   axios.get('https://jsonplaceholder.typicode.cm/posts/1')//if we remove anything in the link so u get error msg.
//       .then(res=>{
//         setLoading(false)
// setPost(res.data)
// setError('')
//       })
//       .catch(err=>{
//         setLoading(false)
//         setPost({})
//         setError('something went wrong..!!')
//     })
//   },[])

//   return (
//     <div>
//         {loading ? 'Loading' : post.title}
//         {error ? error : null }
//     </div>
//   )
// }

// export default Datafetchreducer;

// --------------------------------------------------------------------------------------------------------

// Fetching data using useReducer part2: using useReducer

import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

const initialState={
    loading:true,
    post:{},
    error:''  
}

const reducer=(state,action)=>{
switch(action.type){
    case 'FETCH_SUCCESS':
        return {
            loading:false,
            post:action.payload,
            error:''
        }

        case 'FETCH_ERROR':
            return{
                loading:false,
                post:{},
                error:'something went wrong!'
            }
            default :return state
}
}

function Datafetchreducer() {
    let [state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        // axios.get('https://jsonplaceholder.typicode.cm/posts/1')//if we remove anything in the link so u get error msg.
        .then(res=>{
        dispatch({type:'FETCH_SUCCESS' , payload:res.data})
        })
        .catch(err=>{
          dispatch({type:'FETCH_ERROR'})
      })
    },[])

  return (
    <div>
      {state.loading ? 'Loading' : state.post.title}
       {state.error ? state.error : null }
    </div>
  )
}

export default Datafetchreducer






























