import { useDispatch, useSelector } from "react-redux";
import { Task } from "../Task";
import { useRef, useEffect } from "react";
import { removeTodo, editTodo, setTodos } from "../redux/todoSlice";
import axios from "axios";

const SERVER_URL = "http://localhost:8080/todos";

const Todos = (props) => {
    const todoList = useSelector(state => state.todos);
    const titleRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(SERVER_URL).then((res) => {
            const { data } = res;

            dispatch(setTodos(data));
        })
    }, [])

    const createTodo = async (todoName) => {
        const result = await axios.post(SERVER_URL, {
            title: todoName
        })

        const { data } = result;
        dispatch(setTodos(data));
    }

    const editServerTodo = async (id, title) => {
        const result = await axios.patch(SERVER_URL + "/" + id, {
            title
        });
        const { data } = result;

        dispatch(editTodo(data));
    }

    const deleteServerTodo = async(id) => { 
        console.log("id from deleteServerTodo: ", id);
        await axios.delete(SERVER_URL + "/" + id);
        dispatch(removeTodo(id));
    }

    return <div className="Task">
        <div className="Task">
            <input type="text" className="todo-input" placeholder="Write your task here..." ref={titleRef} onChange={() => { }} />
            <button onClick={() => {
                const newTitle = titleRef.current.value;
                createTodo(newTitle);   
            }}
            className="todo-btn"> Add Task </button>
        </div>
        <div >
            {todoList.map((task) => {
                return (
                    <Task title={task.title} id={task.id} deleteTask={deleteServerTodo}
                    editTask={(taskTitle) => {
                        editServerTodo(task.id, taskTitle)
                    }} key={task.id} />
                );
            })}
        </div>
    </div>
}

export default Todos;