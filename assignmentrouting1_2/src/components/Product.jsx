import { useParams } from "react-router-dom";
export const Product=()=>{
    const {id}=useParams();
    return (

        <div>Product detail:{id}</div>
    );
}