import React ,{useState}from 'react';
import '../Componets/form.css';

export default function Forms() {

        const [text, setText]=useState("");

    
// Add event to the button 

 const handlesubmit= (e)=>{
    //  e.preventDefault();
     let list = setText(text);
         setText("");
 }
      
  return (
        <form onSubmit={handlesubmit}>
             <h1>{list}</h1>
            <input type="text" 
              value={text}
              onChange={(e)=> setText(e.target.value)}
            />
            <input type="submit"/>
        </form>
  )
}
