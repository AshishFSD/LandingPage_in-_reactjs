import logo from './logo.svg';
import './App.css';

import Home from './Componets/Home';
import About from './Componets/About';
import {Route, Routes, Link} from 'react-router-dom';

function App() {
 
   
  return (
    <div className="App">

       <ul>
            <Link to ='/'>Home</Link>
            <Link to ='/About-me'>About-me</Link>
       </ul>
      
    <Routes>

    <Route path="/" element ={<Home/>}/>
     <Route path="/About-me" element ={<About/>}/>
    </Routes>
       
    </div>
  );
}

export default App;
