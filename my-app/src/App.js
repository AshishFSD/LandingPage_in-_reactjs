import React from "react";
import NavBar from "./Component/Navbar";
import './App.css';
import Herosection from "./Component/Herosection";
import About from "./Component/About";
import Feture from "./Component/Feture";
import Pricing from "./Component/Pricing";
import { BrowserRouter, routes, route } from "react-router-dom";


function App() {

  
  return (
    <div className="App">
        <BrowserRouter>
                 <routes>
                      <route path ="/" element={<Herosection/>} />
                      <route path ="About" element={<About/>} />
                 </routes>
        </BrowserRouter>

       
    </div>
  );
}

export default App;
