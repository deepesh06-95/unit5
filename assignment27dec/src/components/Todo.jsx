import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";

export const Todo=()=>{
    const [list,setList]=useState([]);
    const handleClick=(getItemData)=>{
        const payload={
            title:getItemData,
            status:false,
            id:nanoid(7)
        }
        console.log(getItemData);
        setList([...list,payload]);
    };
    const handleDelete=(id)=>{
        console.log(id)
        const del = list.filter((e)=>{
            if(e.id !== id){
                return e;
            }
        })

        setList([...del]);
    }
   
    return <><TodoInput getItemData={handleClick} />
    {list.map((e)=>{
       return <TodoItem key={e.id} {...e} handleDelete={handleDelete}/>
    })}</>;
}