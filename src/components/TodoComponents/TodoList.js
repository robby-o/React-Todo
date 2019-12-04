import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <>
      {props.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </>
  );
}

export default TodoList;
