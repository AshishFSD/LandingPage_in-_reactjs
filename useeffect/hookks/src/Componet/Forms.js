import React,{useState} from 'react'


function Forms({getdata}) {

 const [input, setinput]= useState({ fullname:"", email:" ", number:'' });

 

 const formhandle=(e)=>{
    e.preventDefault();
    getdata(input);
    setinput({
        fullname:'',
        email:'',
        number:''
    });

 }
  return (
  <>
  
  <form onSubmit={formhandle} className="form">
        <input type="text"
         placeholder='Please Enter your name'
          value={input.fullname}
          onChange ={(e)=> setinput({...input ,fullname:e.target.value})}
        />
          
        <input type="email"
         placeholder='Please Enter your email'
         value={input.email}
         onChange ={(e)=> setinput({...input, email: e.target.value})}
        />

        <input type="number"
         placeholder='Please Enter your number'
         value={input.number}
         onChange={(e)=> setinput({...input, number:e.target.value})}
        />
       
      <input type="submit"></input>
   </form>
   
    
  </>
  )
}

export default Forms