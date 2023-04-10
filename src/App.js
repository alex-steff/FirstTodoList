import "./App.css";
import { useState } from "react";

function App() {
  const [keyIndex, setKeyIndex] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState(
    {
      id: -1,
      title: ''
    }
  );

  const getNewKeyIndex = () => {
    const newKeyIndex = keyIndex + 1;
    setKeyIndex(newKeyIndex);
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
    setNewTask(
      {
        id: getNewKeyIndex(),
        title: newTask.title
      }
    );

    setTodoList([...todoList, newTask]);
  }

  const deleteTask = (taskObj) => {
    setTodoList(todoList.filter((task) => task.id !== taskObj.id));
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task </button>
      </div>
      <div className="list">
        { todoList.map((task) => {
          return (
            <div key={task.id}>
              <h1>{task.title}</h1>
              <button onClick={() => deleteTask(task)}> X </button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default App; 
