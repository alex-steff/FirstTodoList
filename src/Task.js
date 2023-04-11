import { useEffect } from "react";

export const Task = (props) => {
    useEffect(()=>{
        console.log("Task mounted: ", props.id);
        return (()=> {
            console.log("Task was unmounted: ", props.title);
        });
    }, []);
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.id}</h1>
            <button onClick={() => props.deleteTask(props)}> X </button>
        </div>
    );
}