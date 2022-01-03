import logo from './logo.svg';
import './App.css';
import { useState, useRef,useEffect} from 'react';
import { Form } from './components/Forms';
import { Showing } from './components/tables';

function App() {
  const inputRef=useRef(null);
  // const [D,setD]=useState(1);
  // console.log("rerendered",test);
  
  return (
    <div className="App">
     <Form />
     <div className="App1">
     <table><Showing/></table>
     </div>
    </div>
  );
}

export default App;
