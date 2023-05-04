import { useEffect, useState, useRef } from "react";

export const Task = (props) => {
    const [editMode, setEditMode] = useState(false);
    const titleRef= useRef();
    useEffect(()=>{
        console.log("Task mounted: ", props.id);
        return (()=> {
            console.log("Task was unmounted: ", props.title);
        });
    }, []);
    return (
        <div>
            {!editMode && <h2>{props.title}</h2>}
            {editMode && <input ref={titleRef} defaultValue={props.title} onChange={()=> {}}/>}
            <h3>{props.id}</h3>
            <button onClick={() => props.deleteTask(props)}> X </button>
            {!editMode && <button onClick={() => setEditMode(true)}> edit </button>}
            {editMode && (
                <button onClick={() => {
                    setEditMode(false)
                    props.editTask(titleRef.current.value)
                }}> save </button>
            )}
        </div>
    );
}