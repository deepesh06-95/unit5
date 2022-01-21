import react from "react";
import {FaTwitter,FaLinkedin,FaQuestion} from "react-icons/fa";
export const Footer=()=>{
    return (
        <div style={{backgroundColor:"black",color:"white",height:"50px",position:"fixed",bottom:0,right:0,width:"100%"}}>
        <FaTwitter style={{fontSize:"50px"}}/>
        <FaLinkedin style={{fontSize:"50px"}}/>
        <FaQuestion style={{fontSize:"50px"}}/>
        </div>
    );
}