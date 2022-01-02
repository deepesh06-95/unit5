export const TodoItem=({title,status,id,handleDelete})=>{
  return <div style={{backgroundColor:"pink",width:"300px",margin:"20px",padding:"20px"}}>
   <img style={{width:"200px"}} src="https://media.istockphoto.com/photos/all-your-necessities-stored-in-one-place-picture-id1157106624?k=20&m=1157106624&s=612x612&w=0&h=jLXRK4qRL_3QITpschx1Wy2Aj2Vyy47Q1Q_R7hVcPQg="></img>
  <div>product name={title}</div>
  <button onClick={()=>{handleDelete(id)}}>delete</button></div>;
}
