import { Link } from "react-router-dom";

export const Users=()=>{
    return (
        <div>
            {[
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing"
            ].map((e)=>(
                <div style={{margin:"10px"}}>
                    <Link to={`/users/${e}`}>Products {e}</Link>
                </div> 
            ))}
        </div>
    );
}