import { ADD_TODO ,EDIT_TODO,ADD_TODO_LOADING,ADD_TODO_SUCCESS,ADD_TODO_ERROR,GET_TODO_ERROR,GET_TODO_LOADING,GET_TODO_SUCCESS,REMOVE_TODO} from "./actionTypes";
const init={loading:false,todos:[],error:false};
// const init={counter:0};
export const reducer=(state=init,{type,payload})=>{
    switch(type){
        case ADD_TODO:
            return {
                ...state,
                todos:[...state.todos,payload],
            };
        case ADD_TODO_LOADING:
                return {
                    ...state,
                   loading:true,
                };
        case ADD_TODO_SUCCESS:
                    return {
                        ...state,
                       loading:false,
                       todos:[...state.todos,payload],
                    };
        case ADD_TODO_ERROR:
                        return {
                            ...state,
                           loading:false,
                           error:true,
                        };
        case GET_TODO_LOADING:
                            return {
                                ...state,
                               loading:true,
                            };
        case GET_TODO_SUCCESS:
                                return {
                                    ...state,
                                   loading:false,
                                   todos:payload,
                                };
        case GET_TODO_ERROR:
                        return {
                            ...state,
                           loading:false,
                           error:true,
                        };
        case REMOVE_TODO:
            return {
                        ...state,
                       loading:false,
                       todos:state.todos.filter((e)=> {
                        return e.id !== payload
                    }),    
            };
        case EDIT_TODO:
                return {
                            ...state,
                           loading:false,
                           todos: state.todos.map(e=> {
                            if(e.id === payload){
                                e.status = e.status?false:true;
                            }
                            return e;
                        }),
                };
            default:
                return state;
    }
};