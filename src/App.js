import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ""
    };
  }

  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ""
    });
  };

  handleChanges = e => this.setState({ [e.target.name]: e.target.value });

  toggleCompleted = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompleted = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    console.log(todos);
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm
          value={this.state.todo}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
