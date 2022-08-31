
import './App.css';
import Skill from './Componet/Skill';
import Bio from './Componet/Bio';
import Contact from './Componet/Contact';
import Experience from './Componet/Experience';

function App() {
  return (
    <div className="App">
       <Bio/>
       <hr/>
       <Skill/>
       <hr/>
       <Experience/>
       <hr/>
       <Contact/>
     
    </div>
  );
}

export default App;
