export const Task = (props) => {
    return (
        <div key={props.id}>
            <h1>{props.title}</h1>
            <button onClick={() => deleteTask(props)}> X </button>
        </div>
    );
}