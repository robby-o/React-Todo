import React from "react";

function Todo(props) {
  return (
    <p
      className={`todo ${props.todo.completed ? "completed" : ""}`}
      onClick={() => props.toggleCompleted(props.todo.id)}
    >
      {props.todo.task}
    </p>
  );
}

export default Todo;
