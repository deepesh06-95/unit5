import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const test=useRef(1);
  const [D,setD]=useState(1);
  console.log("rerendered",test);
  return (
    <div className="App">
      <button onClick={(e)=>{
        test.current=test.current+1;
        console.log(test);
      }}>Increment</button>
      <button onClick={()=>{
        setD((p)=>p+1)
      }}>rerender</button>
    </div>
  );
}

export default App;
