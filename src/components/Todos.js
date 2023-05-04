import { useDispatch, useSelector } from "react-redux";
import { Task } from "../Task";
import { useRef } from "react";
import { addTodo, removeTodo, editTodo } from "../redux/todoSlice";

const Todos = (props) => {
    const todoList = useSelector(state=>state.todos);
    const titleRef= useRef();
    const dispatch =useDispatch();

    console.log(todoList);
    return <div className="App">
        <div className="addTask">
            <input ref={titleRef} onChange={()=>{}} />
            <button onClick={()=>{
                console.log(titleRef.current.value);
                const newTitle = titleRef.current.value;
                dispatch(addTodo(newTitle));
            }}> Add Task </button>
        </div>
        <div className="list">
            {todoList.map((task) => {
                return (
                    <Task title={task.title} id={task.id} deleteTask={()=>{
                        dispatch(removeTodo({id:task.id}))
                    }} editTask={(taskTitle)=>{
                        dispatch(editTodo({id:task.id, title:taskTitle}))
                    }} key={task.id} />
                );
            })}
        </div>
    </div>
}

export default Todos;