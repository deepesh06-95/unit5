import { Link } from "react-router-dom";

export const Users=()=>{
    return (
        <div>
            {[1,2,3,4,5,6].map((e)=>(
                <div style={{margin:"10px"}}>
                    <Link to={`/users/${e}`}>Products {e}</Link>
                </div> 
            ))}
        </div>
    );
}