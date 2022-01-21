
import './App.css';
import { Navbar } from './components/Navbar';
import { Users } from './components/Users';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Product } from './components/Product';
import { Route,Routes} from 'react-router-dom';
import { UserDetail } from './components/UsersDetails';
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';
import { Signout } from './components/Signout';
import { Footer } from './components/Footer';
import { Faq } from './components/Faq';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
     
     <Route path="/about" element={<About/>}>
     </Route>
     <Route path="/faq" element={<Faq/>}>
     </Route>
     <Route path="/contact" element={<Contact/>}>
     </Route>
     <Route path="/product/:id" element={<Product/>}>
     </Route>
     <Route path="/users" element={<PrivateRoute><Users/></PrivateRoute>}>
     </Route>
     <Route path="/users/:userid" element={<PrivateRoute><UserDetail/></PrivateRoute>}>
     </Route>
     <Route path="/login" element={<Login/>}>
     </Route>
     <Route path="/signout" element={<Signout/>}>
     </Route>
     <Route path="*" element={<h1>404 Page not found</h1>}>
     </Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
