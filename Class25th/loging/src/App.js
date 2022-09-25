import Btn from './comonent/Button';
import Heading from './comonent/Heading';
import './App.css';
import InputForm from './comonent/InputForm';

function App() {



   const btn ={
    border: "1px solid #fff;",
    backgroudColor:"#fff"

   }


  return (
       <div className="container" >
          <div className="left"> 

            <Heading headline ="Sign in to Account"/>
  

            <div className='icon'>
            <i class="fa fa-facebook"></i>
            <i class="fa fa-linkedin"></i>
            <i class="fa fa-google-plus"></i>
            </div>
            <p>or. use your email account</p>

            <InputForm/>
            <div className='formlink'>
               <input type="checkbox"/> 
              <label>Remamber me</label>
               Forgot Password ?

            </div>
              
            <Btn btnvalue ="Sign in"/>

          
          </div>
          <div className="right"> 

          <Heading headline ="Hello Frinend !"/>
          <p className='text'>Fill up personal information and <br/>start journy with us</p>
           <button className='btn'> Sign up</button>
          </div>

       </div>
  );
}

export default App;
