import './App.css';
import User from './components/User';
import Profile from './components/Profile';
import Button from './components/Button';

function App() {



  return (
    <div className="App">
      <div className='item1'>
      <Profile />
      </div>
       
      <div className='item2'>
       <User/>
       <Button/>
       </div>

       
      
    </div>
  );
}

export default App;
