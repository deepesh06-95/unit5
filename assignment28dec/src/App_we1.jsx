import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [mouse,setMouse]=useState("");
  
  return (
    <div onMouseMove={(e)=>{
      console.log(e.clientX,e.clientY);
      setMouse(`(X-${e.clientX},Y-${e.clientY})`);
    }} className="App" style={{display:'flex',backgroundColor:'red',width:'300px',height:'300px'}}>
     
      {mouse}
      
    </div>
  );
}

export default App;
