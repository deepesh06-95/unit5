import { useState } from "react"
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
export const Login=()=>{
 const [form,setForm]=useState({});
 const {handleToken}=useContext(AuthContext)
 const navigate=useNavigate();
 const handleChange=({target:{name,value}})=>{
     setForm({
         ...form,
         [name]: value
     })
 }
 return (
<div>
  <input type="text" onChange={handleChange} name="email" placeholder="enter email" className="border-2 border-gray-500 m-4"/>
  <input type="text" onChange={handleChange} name="password" placeholder="enter password" className="border-2 border-gray-500 m-4"/>
  <button onClick={()=>{
     try{
      fetch("https://reqres.in/api/login",{
        method:"POST",
        body:JSON.stringify(form)
      });
      handleToken("123456789");
      navigate(-1);
    }catch{
      //
    }
  }} className="border-2 border-gray-500 m-4 bg-red-200">Signin</button>
</div>
 );
}