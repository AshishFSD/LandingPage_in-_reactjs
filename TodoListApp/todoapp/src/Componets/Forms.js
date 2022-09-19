import React,{useState} from 'react'


function Forms() {
 

     const [task, setTaks] = useState([]); 

   
       const addtask =(previous)=>{
          
           setTaks(...task, ...task);

           task ="";
       }




   return(
      <div>
             <input type="text"
               value={task}
               onChange={e=> setTaks(e.target.value)}
    
             />
             <button onClick={addtask}> Add Task</button>

              <div className='task_container'>

                 <ul>
                    <li>{task}</li>
                 </ul>

              </div>
      </div>
   )
  
}

export default Forms