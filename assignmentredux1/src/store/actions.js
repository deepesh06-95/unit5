import { ADD_TODO, EDIT_TODO,ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS,GET_TODO_ERROR,GET_TODO_LOADING,GET_TODO_SUCCESS } from "./actionTypes"
import { REMOVE_TODO } from "./actionTypes";
export const addTodo=(data)=>({
    type: ADD_TODO,
    payload: data,
});
export const addTodoLoading=()=>{
    return {
        type:ADD_TODO_LOADING,
    }
}
export const addTodoSuccess=(data)=>{
    return {
        type:ADD_TODO_SUCCESS,
        payload: data,
    }
}
export const addTodoError=(err)=>{
    return {
        type:ADD_TODO_ERROR,
        payload: err,
    }
}
export const getTodoLoading=()=>{
    return {
        type:GET_TODO_LOADING,
    }
}
export const getTodoSuccess=(data)=>{
    return {
        type:GET_TODO_SUCCESS,
        payload: data,
    }
}
export const getTodoError=(err)=>{
    return {
        type:GET_TODO_ERROR,
        payload: err,
    }
}
export const removeTodo=(id)=>({
    type: REMOVE_TODO,
    payload: id,
});
export const editTodo=(id)=>({
    type: EDIT_TODO,
    payload: id,
});