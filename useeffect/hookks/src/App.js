
import './App.css';
import {useState, useEffect} from 'react';



function App() {

  const [data ,setdata]= useState('users');
   
  const [item ,setitem]= useState([]);

    console.log(item);
  
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
    .then(res => res.json())
    .then(json => setitem(json));
  },[data])

    
  return (
        <>
         <button onClick={()=> setdata("users")}>user</button>
         <button onClick={()=> setdata("posts")}>posts</button>
         <button onClick={()=> setdata("comments")}>comments</button>
           
        <div  className='container'>


    {JSON.stringify(item)}
                   
        </div>

        </>
  )

}

export default App;
