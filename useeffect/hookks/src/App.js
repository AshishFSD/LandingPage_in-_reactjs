
import './App.css';
import Forms from './Componet/Forms';
import Tablecontainer from './Componet/Tablecontainer';
import {useState} from 'react'
import Form from './Componet/Form';

function App() {

  const [tabledata, settabledata]= useState([]);


  
   const updateList =(previous)=>{
           let copy = [...tabledata,previous];
           settabledata(copy);

   }




  return <>
   <div className='App'>
     {/* <Forms getdata={updateList} />
    <Tablecontainer passdata={tabledata}/>  */}


    <Form/>
   </div>
  </>
}

export default App;
