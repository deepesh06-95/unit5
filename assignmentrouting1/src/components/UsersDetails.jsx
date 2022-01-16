import { useParams , useNavigate, Navigate } from "react-router-dom";
import { useEffect , useState} from "react";
import { AuthContext } from '../contexts/AuthContext';
 import { useContext } from "react";
export const UserDetail=()=>{
    const {userid} = useParams();
    const [ user ,setUser]=useState({});
    const { token }= useContext(AuthContext);
    useEffect(() => {
       fetch(`https://fakestoreapi.com/products/${userid}`)
       .then(d=>d.json()).then(d=>{
        console.log(d);
       setUser(d);
       
       })
    }, [userid]);
    if(!token){
        return <Navigate to={"/login"}/>
    }
   
    return (
        <div>
            <h1>products data clicked : {userid}</h1>
            <tr>
            <td>
                <tr><strong>Name </strong></tr>
                <tr>{user.title}</tr>
            </td> 
            <td><tr><strong>Price </strong></tr><tr>{user.price}</tr></td> 
            <td><tr><strong>Description </strong></tr><tr>{user.description}</tr></td> 
            <td><tr><strong>Category </strong></tr><tr>{user.category}</tr></td> 
            </tr>
        </div>
    );
}