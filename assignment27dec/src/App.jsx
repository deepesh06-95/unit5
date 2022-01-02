import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Todo } from './components/Todo';
function App() {
  return (
    <div className="App">
     <h3>store</h3>
     <div className='griding'>
     <Todo/>
     </div>
     
    </div>
    
  );
}

export default App;
