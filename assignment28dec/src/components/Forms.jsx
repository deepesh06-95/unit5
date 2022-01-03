

import { useState , useRef} from "react"
import { nanoid } from "nanoid";
export const Form=({ setShowTable })=>{
    const [form,setForm]=useState({
        username:"",
        userage:"",
        address:"",
        department:"",
        salary:"",
        marital_state:"",
        profile_pic:""
    })
    const [list,setList]=useState([]);
    const ref=useRef("");
    const handleChange=(e)=>{
     const {name,value}=e.target;
    //  console.log(ref.current.files)
    let val=e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    // value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    
    setForm({...form,[name]:val});
    // console.log(form);
    }
    const handleFileChange=(e)=>{
        // e.preventDefault();
        console.log(ref.current.files[0].name)
        setForm({...form,profile_pic:ref.current.files[0].name});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(ref.current.files[0].name)
        console.log(form);
        const payload={
            username:form.username,
        userage:form.userage,
        address:form.address,
        department:form.department,
        salary:form.salary,
        marital_state:form.marital_state,
        profile_pic:form.profile_pic,
            status:false,
            id:nanoid(7)
        }
        setList([...list,payload]);
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'content-type': 'application/json'
            }
        }).then(() => console.log("done"));
    }
    return (
        <form onSubmit={handleSubmit} >
            <input onChange={handleChange} name="username" type="text" placeholder="name"/>
            <input onChange={handleChange} name="userage" type="number" placeholder="age"/>
            <input onChange={handleChange} name="address" type="text" placeholder="address"/>
            <select onChange={handleChange} name="department" placeholder="department">
                        <option >--Choose a department--</option>
                        <option >cse</option>
                        <option >it</option>
                        <option >mechanical</option>
                        <option >civil</option>
            </select>
            <input onChange={handleChange} name="salary" type="number" placeholder="salary"/>
            <div>
                <label>Married</label>
                <input onChange={handleChange} name="marital_state" type='checkbox' placeholder="marital status"></input>
                </div>
                
                       
            <input ref={ref} onChange={handleFileChange} type="file"/> 
            <input type="submit" value="submit"/>
        </form>
    )
}