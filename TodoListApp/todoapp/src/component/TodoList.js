import React from 'react'
import Todo from './Todo'

function TodoList(props) {

     
  return (
    <div>
        <Todo  item ={props.list}/>
        
    </div>
  )
}

export default TodoList