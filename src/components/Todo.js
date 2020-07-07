import React from "react";

function Todo(props) {
    const onClick = () => {
        props.completeTodo(props.todo.id);
    }

    return (
        <div onClick={onClick} className={props.todo.completed ? "completed" : ""}>
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo;