import React ,{useState}from "react";
import './navbar.css'


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
                  <li>Home</li>
                  <li>About</li>
                  <li>FEATURES</li>
                   <li>PRICING</li>
                   <button className="loginbtn">Login</button>
                </ul>

        </div>
    )
}


export default NavBar;