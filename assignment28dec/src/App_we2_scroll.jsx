import logo from './logo.svg';
import './App.css';
import { useState, useRef} from 'react';

function App() {
  const inputRef=useRef(null);
  // const [D,setD]=useState(1);
  // console.log("rerendered",test);
 
  return (
    <div className="App">
      
      <div ref={inputRef} style={{height:"400px",widtH:"200px",backgroundColor:"red"}}></div>
      <div style={{height:"400px",widtH:"200px",backgroundColor:"blue"}}></div>
      <div style={{height:"400px",widtH:"200px",backgroundColor:"orange"}}></div>
      <div style={{height:"400px",widtH:"200px",backgroundColor:"green"}}></div>
      <button onClick={()=>{
       inputRef.current.scrollIntoView({behavior:"smooth"});
      }}>scroll up</button>
    </div>
  );
}

export default App;
