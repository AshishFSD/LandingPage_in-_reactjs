import Header from "./component/Header";

import React,{useState} from "react";
import data from "./component/todoData.json";
import './App.css';
import TodoList from "./component/TodoList";


function App() {

 const [list ,setTodo] = useState(data);

   return(
     <div>
       <Header/>
       <TodoList list ={list}/>
     </div>
   )
}

export default App
