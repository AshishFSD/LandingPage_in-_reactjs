import React from 'react'
import './herosection.css';
import image from '../images/header-software-app.png';

function Herosection() {
  return (
    <div className='hero'>

         <div className='hero_leftside'>
         <h1>SaaS App React Landing Page</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </p>
          <button>Learn More</button>
         </div>
         <div className='hero_rightside'>
            <img src={image}/>
         </div>
    </div>
  )
}

export default Herosection