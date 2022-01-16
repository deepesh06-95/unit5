import { useParams , useNavigate, Navigate } from "react-router-dom";
import { useEffect , useState} from "react";
import { AuthContext } from '../contexts/AuthContext';
 import { useContext } from "react";
export const UserDetail=()=>{
    const {userid} = useParams();
    const [ user ,setUser]=useState({});
    const { token }= useContext(AuthContext);
    useEffect(() => {
       fetch(`https://reqres.in/api/users/${userid}`)
       .then(d=>d.json()).then(d=>{
        console.log(d.data);
       setUser(d.data);
       
       })
    }, [userid]);
    if(!token){
        return <Navigate to={"/login"}/>
    }
   
    return (
        <div>
            <h1>users data clicked : {userid}</h1>
            <img src={user.avatar} alt="test" />
            <div>Name : {user.first_name} {user.last_name}</div> 
            <div>Email : {user.email}</div> 
        </div>
    );
}