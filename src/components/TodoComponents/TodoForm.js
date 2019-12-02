import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: ""
    };
  }

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todo"
          value={this.state.newTodo}
          onChange={this.handleChanges}
          placeholder="add todo"
        />
        <button>Add Todo</button>
        <button className="clear-btn" onClick={this.props.clearCompleted}>
          Clear Completed
        </button>
      </form>
    );
  }
}

export default TodoForm;
