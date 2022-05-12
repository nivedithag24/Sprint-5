// // Fetching data with useEffect (part-1):

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Datafetch() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         console.log(res);
//         setPosts(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Datafetch;

// ----------------------------------------------------------------------------------------------

// // Fetching data with useEffect (part-2):

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Datafetch() {
//   const [post, setPost] = useState({});
//   const[id,setId]=useState(1)

//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${id}`) //here we are appending the post id
//       .then((res) => {
//         console.log(res);
//         setPost(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [id]);
//   return (
//     <div>
//         <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
//       {/* <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul> */}
//       <h1>{post.title}</h1>
//     </div>
//   );
// }

// export default Datafetch;

// ------------------------------------------------------------------------------------------


// Fetching data with useEffect (part-3):

import React, { useState, useEffect } from "react";
import axios from "axios";

function Datafetch() {
  const [post, setPost] = useState({});
  const[id,setId]=useState(1)
  const[idFromButtonClick ,setIdFromButtonClick] =useState(1)

  const handleClick=()=>{
      setIdFromButtonClick(id)
  }
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`) //here we are appending the post id
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  return (
    <div>
        <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
      <button type='submit' onClick={handleClick}>Fetch post</button>
      <h1>{post.title}</h1>
    </div>
  );
}

export default Datafetch;

// ----------------------------------------------------------------------------



