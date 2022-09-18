import React from 'react';
import './profile.css';


 const image ="https://picsum.photos/200/300?random=1"

function Profile() {
  return (
      <div className='profile'>
             <div className='userImg'>
                 <img src={image}/>
                 <h3>user Name</h3>
             </div>
              <ul className='menu'>
                   <li>Home</li>
                   <li>Deposite</li>
                   <li>Offers</li>
                   <li>Payments</li>
                   <li>Setting</li>
              </ul>
      </div>
  )
}

export default Profile