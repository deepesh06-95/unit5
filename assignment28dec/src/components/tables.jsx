import { useState , useRef} from "react"

export const Showing=()=>{
   const [all,setAll]=useState([]);
   const test=useRef([]);
    const getUserDetails = () => {
        fetch('http://localhost:3001/posts')
          .then(data => data.json())
          .then(res => 
              setAll(res))
            // test.current=res);
      }
      getUserDetails();
    // const x=test.current;
    const x=all;
   console.log(x);
    return (
        
        <>
        <tr>
        <th>S.No.</th>
        <th>Username</th>
        <th>Use Age</th>
        <th>Department</th>
        <th>Address</th>
        <th>Salary</th>
        <th>Marital Status</th>
        <th>Profile picture</th>
        </tr>
        {x.map((e,i)=>
            <tr style={{fontSize:"12px",margin:"5px"}}>
                <td>{i+1}</td>
                <td>{e.username}</td>
                <td>{e.userage}</td>
                <td>{e.department}</td>
                <td>{e.address}</td>
                <td>{e.salary}</td>
                <td>{e.marital_state?"Yes":"No"}</td>
                <td>{e.profile_pic}</td>
           </tr>
        )}
           
        </>
        
    );
}
