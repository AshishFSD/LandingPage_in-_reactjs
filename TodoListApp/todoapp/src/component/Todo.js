import React from 'react'

function Todo(props) {
     
  const todolist = props.item;
    console.log(todolist)
     
  return (
    <div>
        <ul>
             {props.item.map(ele=>(
                 <li key={ele.id}>{ele.task}</li>
             ))}
      </ul>  
     
    </div> 
  )
}

export default Todo