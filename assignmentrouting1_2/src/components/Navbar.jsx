import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';
 import { useContext } from "react";
 import {FaShoppingCart} from "react-icons/fa";
 import offer from "../public/offer.gif";
export const Navbar=()=>{
    const { token }= useContext(AuthContext);
    return (
        <div style={{border:"thick solid red",display:"flex",justifyContent:"space-between",backgroundColor:"black",color:"white"}}>
            <Link to="/" style={{margin:"10px",color:"white"}}>Home</Link>
            <Link to="/about" style={{margin:"10px",color:"white"}}>About</Link>
            <Link to="/contact" style={{margin:"10px",color:"white"}}>Contact</Link>
            <Link to="/users" style={{margin:"10px",color:"white"}}>Products</Link>
            <Link to="/login" style={{margin:"10px",color:"white"}}>Login</Link>
            <Link to="signout" style={{margin:"10px",color:"white"}}>Signout</Link>
            <Link to="/faq" style={{margin:"10px",color:"white"}}>FAQs</Link>
            <div style={{margin:"10px",color:"white"}}>Status:{token?"Logged in":"Logged out"}</div>
            <FaShoppingCart style={{fontSize:"30px",margin:"10px"}}/>
            <img src={offer} style={{width:"150px"}}/>
        </div>
    );
}