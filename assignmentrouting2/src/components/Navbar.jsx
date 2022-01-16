import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';
 import { useContext } from "react";
export const Navbar=()=>{
    const { token }= useContext(AuthContext);
    return (
        <div>
            <Link to="/" style={{margin:"10px"}}>Home</Link>
            <Link to="/dashboard" style={{margin:"10px"}}>Dashboard</Link>
            <Link to="/about" style={{margin:"10px"}}>About</Link>
            <Link to="/contact" style={{margin:"10px"}}>Contact</Link>
            <Link to="/users" style={{margin:"10px"}}>Products</Link>
            <Link to="/login" style={{margin:"10px"}}>Login</Link>
            <Link to="/signout" style={{margin:"10px"}}>Signout</Link>
            <h3>Status:{token?"Logged in":"Looged out"}</h3>
        </div>
    );
}