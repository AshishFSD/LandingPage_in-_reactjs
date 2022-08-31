import React from "react";
import NavBar from "./Component/Navbar";
import './App.css';
import Herosection from "./Component/Herosection";
import About from "./Component/About";
import Feture from "./Component/Feture";
import Pricing from "./Component/Pricing";

import { Link } from "react-router-dom";


function App() {

  
  return (
    <div className="App">
      <NavBar/>
      <Herosection/>
      <About/>
      <Feture/>
      <Pricing/>
      

       
    </div>
  );
}

export default App;
