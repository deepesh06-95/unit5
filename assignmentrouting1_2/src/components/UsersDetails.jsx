import { useParams , useNavigate, Navigate } from "react-router-dom";
import { useEffect , useState} from "react";
import { AuthContext } from '../contexts/AuthContext';
 import { useContext } from "react";
export const UserDetail=()=>{
    const {userid} = useParams();
    const [ user ,setUser]=useState([]);
    const { token }= useContext(AuthContext);
    useEffect(() => {
       fetch(`https://fakestoreapi.com/products/category/${userid}`)
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
            {user.map((e)=>(
                <div style={{margin:"25px",border:"thick solid gray",padding:"5px"}}>
                   <tr>
            <td style={{textAlign:"left"}}>
                <tr><strong>Name </strong>{e.title}</tr>
                <tr><strong>Price </strong>{e.price}</tr>
                <tr><strong>Category </strong>{e.category}</tr>
                <tr><strong>Description </strong>{e.description}</tr>
                <tr><strong>Price </strong>{e.price}</tr>
            </td> 
            <td><tr><strong>Image </strong></tr><tr><img src={e.image} style={{width:"100px"}}/></tr></td> 
            </tr>
                </div> 
            ))}
        </div>
    );
}