const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    id: {
        type: Int16Array,
        required: true
    }
})

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;