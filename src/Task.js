import { useState, useRef } from "react";

export const Task = (props) => {
    const [editMode, setEditMode] = useState(false);
    const titleRef= useRef();
    return (
        <div className="Todo">
            {!editMode && <span>{props.title}</span>}
            {editMode && <input ref={titleRef} defaultValue={props.title} onChange={()=> {}}/>}
            <button className="Todo" onClick={() => props.deleteTask(props.id)}> X </button>
            {!editMode && <button className="Todo" onClick={() => setEditMode(true)}> edit </button>}
            {editMode && (
                <button  onClick={() => {
                    setEditMode(false)
                    props.editTask(titleRef.current.value)
                }}
                className="Todo"> save </button>
            )}
        </div>
    );
}