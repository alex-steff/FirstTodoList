import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState:[],
    reducers: {
        addTodo: (state, action) => {
            console.log(action);
            const id = state.length + 1;
            const todo = {
                id,
                title:action.payload
            }
            console.log(todo);
            return state.concat(todo);
        },
        removeTodo:(state,action)=>{
            const id = action.payload.id;
            console.log(id);
            return state.filter((todo)=> todo.id !== id);
        },
        editTodo: (state, action) => {
            const id = action.payload.id;
            const title = action.payload.title;

            return state.map((todo)=>{
                if(todo.id === id) {
                    return {
                        ...todo,
                        title
                    }
                } 
                return todo;
            });
        }
    }
});

export const {addTodo, removeTodo, editTodo} = todoSlice.actions;
export default todoSlice.reducer;