import React from "react";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { addTodo,editTodo, addTodoError, addTodoLoading, addTodoSuccess,getTodoError,getTodoLoading,getTodoSuccess ,removeTodo} from "../store/actions";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
export const Todos=()=>{
    const [text,setText]=useState("");
    const dispatch=useDispatch();
    const {loading,todos,error}=useSelector((state)=> ({loading:state.loading,todos:state.todos,error:state.error}));
    useEffect(()=>{
        async function req(){
            try{
                dispatch(getTodoLoading());
                const data=await fetch("http://localhost:3001/todos").then((d)=>d.json())
                dispatch(getTodoSuccess(data));
        }catch(err){
            dispatch(getTodoError(err));
        }
    }
    req(); 
    },[])
    const addTodo=()=>{
        dispatch(addTodoLoading());
        fetch("http://localhost:3001/todos",{
            method:"POST",
            headers:{"Content-Type":"application/json",
        },
        body:JSON.stringify({status:false,title:text}),
    })
    .then((d)=>d.json())
    .then((res)=>{dispatch(addTodoSuccess(res))})
    .catch((err)=>{dispatch(addTodoError(err))});
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return loading?<div>loading....</div>:error?(<div>Something went wrong</div>):(
        
        <div>
            <input value={text} type="text" placeholder="enter task" onChange={(e)=>setText(e.target.value)}/>
            <button onClick={()=>addTodo()}>Add task</button>
             {todos.map((e) => <>
       <div>{e.title}-{e.status?"Done":"not done"}</div>
       <button onClick={()=>{dispatch(removeTodo(e.id))}}>Delete</button>
       {/* <button onClick={()=>{dispatch(editTodo(e.id))}}>Toggle</button> */}
       <div>
      <Button onClick={handleOpen}>EDIT</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <div>{e.title}-{e.status?"Done":"not done"}</div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
       {/* <button onClick={()=>{dispatch(removeTodo(e.id))}}>Delete</button> */}
       <button onClick={()=>{dispatch(editTodo(e.id))}}>Toggle</button>
       <button onClick={handleClose}>X</button>
          </Typography>
        </Box>
      </Modal>
    </div>
       </>
       
     )}
        </div>
    )
}