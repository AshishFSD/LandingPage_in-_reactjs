import React from 'react';
import './activeDeposite.css';

function ActiveDeposite(props) {
  return (
      <>
    <div className='active-user'>
         <div className='user-dis'>
         <img src={props.userimg}/>
          <div className='discription'>
          <p>{props.user}</p> <br/>
          <p>User Discription</p>

          </div>
         </div>
         <h4>{props.date}</h4>
         <h4>{props.amount}</h4>
         <h4>{props.deposite}</h4>
         <h4>{props.status}</h4>
         <h4>{props.sysmbol}</h4>

    </div>
</>
  )
}

export default ActiveDeposite