import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';
 import { useContext } from "react";
export const Navbar=()=>{
    const { token }= useContext(AuthContext);
    return (
        <div className="flex flex-row border-solid border-2 border-gray-400 m-4 bg-red-500 text-white">
            <Link to="/" style={{margin:"10px"}} className="mx-12 px-12 text-2xl font-semibold">Home</Link>
            <Link to="/todo" style={{margin:"10px"}} className="mx-12 px-12 text-2xl font-semibold">ADMIN</Link>
            <Link to="/job" style={{margin:"10px"}} className="mx-12 px-12 text-2xl font-semibold">JOB</Link>
            <Link to="/login" style={{margin:"10px"}} className="mx-12 px-12 text-2xl font-semibold">Login</Link>
            <Link to="/signout" style={{margin:"10px"}} className="mx-12 px-12 text-2xl font-semibold">Signout</Link>
            <h3 style={{margin:"10px"}} className="mx-12 px-12 text-2xl font-semibold">Status:{token?"Logged in":"Logged out"}</h3>
        </div>
    );
}