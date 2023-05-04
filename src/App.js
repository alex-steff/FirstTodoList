import "./App.css";
import { useState, useEffect } from "react";
import { Task } from "./Task";
import axios from "axios";
import store from "./redux/store";
import { Provider } from "react-redux";
import Todos from "./components/Todos";

function App() {
  const [keyIndex, setKeyIndex] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState(
    {
      id: -1,
      title: ' '
    }
  );

  useEffect(()=> {
    if(todoList.length <= 0) return;
    console.log("todo list: ", todoList);
  }, [todoList.length]);

  // useEffect (()=> {
  //   axios.get("https://jsonplaceholder.typicode.com/todos", {
  //     params: {
  //       fields: "title,id"
  //     }
  //   }).then((result) => {
  //     setTodoList(result.data);
  //   });
  // }, []);

  const getNewKeyIndex = () => {
    const newKeyIndex = keyIndex + 1;
    setKeyIndex(newKeyIndex);
    console.log(newKeyIndex);
    return newKeyIndex;
  }
  
  const handleChange = (event) => {
    setNewTask(
      {
        id: -1,
        title: event.target.value
      }
    );
  } 

  const addTask = () => {
    const newId = getNewKeyIndex();
    console.log("new id:", newId);
    const newT = {
      id:newId,
      title:newTask.title
    }
    setNewTask(
      newT
    );
    setTodoList((currList)=>[...currList, newT]);
  }

  const deleteTask = (taskObj) => {
    setTodoList(todoList.filter((task) => task.id !== taskObj.id));
  }

  return (
    <Provider store={store}>
      {/* <div className="App">
        <div className="addTask">
          <input onChange={handleChange} />
          <button onClick={addTask}> Add Task </button>
          <Counter/>
        </div>
        <div className="list">
          { todoList.map((task) => {
            return (
              <Task title={task.title} id={task.id} deleteTask={deleteTask} key={task.id}/>
            );
          })}
        </div>
      </div> */}
      <Todos/>
    </Provider>
  )
}

export default App; 
