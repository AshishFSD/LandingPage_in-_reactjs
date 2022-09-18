import React ,{useState} from 'react'
import ActiveDeposite from './ActiveDeposite';
import './user.css';


  const Userimage ="https://picsum.photos/200/300?random=2"
function User() {

    const [activeUser , setUser]=useState(0);




  return (
   <>
   <h1>Active Deposite{activeUser}</h1>
    <div className='user-hader'>
         <h2>Porfile</h2>
         <h2>Date</h2>
         <h2>Available Amount</h2>
         <h2>Deposite</h2>
         <h2>Status</h2>
         <h2>Symbol</h2>
    </div>
    
    <ActiveDeposite 
         userimg ={Userimage}
         user="Ashish"
         date="12-14-2022"
         amount="500"
         deposite="400"
         status="sucess"
         sysmbol="green"
    />

<ActiveDeposite 
         userimg ={Userimage}
         user="Ashish"
         date="12-14-2022"
         amount="500"
         deposite="400"
         status="sucess"
         sysmbol="green"
    />
    
   
   
   </>
  )
}

export default User