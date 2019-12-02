import React from "react";

function Todo(props) {
  return (
    <div className={`todo ${props.todo.completed ? "completed" : ""}`}>
      <p onClick={props.toggleCompleted} id={props.todo.id}>
        {props.todo.task}
      </p>
    </div>
  );
}

export default Todo;
