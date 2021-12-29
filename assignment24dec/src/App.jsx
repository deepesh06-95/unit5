import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // let count=0;
  const [count,setCount]=useState(0);
  const changeCount=(value)=>{
    // setCount((count<=0 && value===-1)?count:(count+value));//is working
    setCount((prev)=>{
      return (prev<=0 && value===-1)?prev:(prev+value);//but if we don't want count previous value can be taken
    });
    console.log("counter",count);
  };
  if(count>20)
  {
    return <div className='coun'>Counter has reached its limit</div>
  }
  return (
    <div className="App">
    <h3 className='coun'>Counter-{count}</h3>
    <button className='mar' onClick={()=>changeCount(1)}>Increment by 1</button>
    <button className='mar' onClick={()=>changeCount(-1)}>Decrement by 1</button>
    <button className='mar' onDoubleClick={()=>changeCount(count)}>Double</button>
    <div>Counter is {count%2===0?"Even":"Odd"}</div>
    </div>
  );
}

export default App;
