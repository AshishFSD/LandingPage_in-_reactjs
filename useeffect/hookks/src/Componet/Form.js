import React ,{useState}from 'react'

function Form() {
 
     const [name, setname]= useState({username:"", password:""})

    
     const formhandle=(e)=>{
          e.preventDefault();

        //   preventDefault()
     }
     
  return (
    <form onSubmit={formhandle}>
          <input type="text"
           value={name.username}
           onChange={(e)=>setname({...name, username:e.target.value})}
          />
          <input type="text"
           value={name.password}
           onChange={(e)=>setname({...name, password:e.target.value})}
          />


          <button>Re-start</button>

          <h1> Hello {name.username}</h1>
    </form>


  )
}

export default Form