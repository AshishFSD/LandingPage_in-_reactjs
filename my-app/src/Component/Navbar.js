import React ,{useState}from "react";
import './navbar.css'
import { Link } from "react-router-dom";


function NavBar(){

 const [navClass, setnavClass]=useState("navLink m_navlink");

  
  function mclick(){
     let changeclass = navClass == 'navLink' ? "navLink m_navlink" :'navLink';

     setnavClass(changeclass);
  }


    return(
        <div className="navbar">
              <div className="logo">
                    <h1>Code<span>Pick</span></h1>
              </div>
               <div onClick={mclick}>
               <div className="menu"></div>
              <div className="menu"></div>
              <div className="menu"></div>

               </div>
              <ul className={navClass}>
                  <Link to ="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to ="/Fetures">FEATURES</Link>
                   <Link to = "/Pricing">PRICING</Link>
                   <button className="loginbtn">Login</button>
                </ul>

        </div>
    )
}


export default NavBar;