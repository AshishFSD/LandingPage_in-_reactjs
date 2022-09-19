import './App.css';
import Forms from './Componets/Forms';
import { useState } from 'react';

 
function App() {



    const [todo , setTodo]= useState([]);

    
   function addTodo(newitem){
      setTodo(...todo, ...newitem);

       console.log(todo);
   }
  
     
  return (
       <div className='containt'>
           <Forms add={addTodo}/>

           <h1>{todo}</h1>
    </div>
  );
}

export default App;
