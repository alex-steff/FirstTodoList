const express = require("express");
const cors = require('cors');
const Todo = require("./Todo")
const app = express();

var todos = [];

const PORT = 8080;

app.use(express.json());

app.use(cors());

app.listen(PORT, () => {
    console.log("Server is up");
});

app.get("/todos", (req, res) => {
    res.send(todos);
})

app.post("/todos", (req, res) => {
    const { title } = req.body;
    const newTodo = {
        id: todos.length + 1,
        title
    }
    todos.push(newTodo);
    res.send(todos);
})

app.patch("/todos/:id", (req, res) => {
    const { title } = req.body;
    const { id } = req.params;

    const index = todos.findIndex(todos => todos.id === parseInt(id));

    todos[index].title = title

    res.send(todos[index]);
})

app.delete("/todos/:id", (req, res) => {
    const { id } = req.params;
    const parsedId = parseInt(id);
    todos = todos.filter((todo)=> todo.id !== parsedId);

    res.send(todos);
})