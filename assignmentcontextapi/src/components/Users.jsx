import { Link } from "react-router-dom";

export const Users=()=>{
    return (
        <div>
            {[1,2,3,4].map((e)=>(
                <div style={{margin:"10px"}}>
                    <Link to={`/users/${e}`}>Users {e}</Link>
                </div> 
            ))}
        </div>
    );
}