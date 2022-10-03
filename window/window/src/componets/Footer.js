import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div>
         <div className='footer'>
               <div>
               <div className='icon'>
               <i class="fa fa-windows"></i>
               </div>
               <div className='sechrbar'>
               </div>
               </div>

               <div className='click_icon'>
               <i class="fa fa-folder-open-o"></i>
               <i class="fa fa-chrome"></i>
               <i class="fa fa-firefox"></i>
               <i class="fa fa-whatsapp"></i>
               </div>

               <div className='lasticon'>
               <h1><i className="f	fa fa-moon-o"></i></h1>
               <h1><i className="fa fa-microphone"></i></h1>
               <h1><i className="	fa fa-volume-up"></i></h1>
               <h1>ENG</h1>
               <h1><i className="fa fa-wifi"></i></h1>
               <h1><i className="fa fa-comment-o"></i></h1>
               </div>
         </div>
    </div>
  )
}

export default Footer