import { useState } from "react";

export const TodoInput=({getItemData})=>{
    const [item,setItem]=useState("");
    const handleChange=(e)=>{
        setItem(e.target.value);
        };
    const handleClick=()=>{
      getItemData(item);
        }
    return <><input type="text" placeholder="type items here" onChange={handleChange}/>
    <button onClick={handleClick}>Add items here</button></>;

    
}