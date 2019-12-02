import React from "react";

function TodoForm(props) {
  return (
    <form onSubmit={props.addTodo}>
      <input
        type="text"
        name="todo"
        value={props.value}
        onChange={props.handleChanges}
        placeholder="add todo"
      />
      <button>Add Todo</button>
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </form>
  );
}

export default TodoForm;
