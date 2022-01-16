import { Link } from "react-router-dom";

export const Dashboard=()=>{
    return (
        <div>
            <h1>Welcome to dashboard</h1>
            <Link to={`/dashboard/settings`}>Go to settings</Link>
        </div>
    );
}