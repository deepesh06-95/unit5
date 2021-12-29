import logo from './logo.svg';
import './App.css';

function App() {
var arr=[{product:"Operating System",brand:["Android","Blackberry","iPhone","Windows Phone"]},{product:"Manufacturers",brand:["Samsung","HTC","Micromax","Apple"]}];
  return (
    <div style={{
      marginLeft:"10px"
    }}>
     {arr.map((e)=>(<div><h2>Mobile {e.product}</h2>
     <ul><li>{e.brand[0]}</li>
     <li>{e.brand[1]}</li>
     <li>{e.brand[2]}</li>
     <li>{e.brand[3]}</li></ul>
     </div>
     ))}
    </div>
  );
}

export default App;
