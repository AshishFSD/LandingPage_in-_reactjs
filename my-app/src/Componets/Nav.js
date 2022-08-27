import React from "react";
import './nav.css';

 class Nav extends React.Component{

     render(){
          return(
              <div className="navbar">
                     
                     <div className="logo">Random <span>Color</span></div>

                      <div className="navItem">
                              <ul>
                                   <li>About us</li>
                                   <li> Contact us</li>
                              </ul>
                      </div>
              </div>
          )
     }
 }


 export default Nav;