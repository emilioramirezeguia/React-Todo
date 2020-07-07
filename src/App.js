import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [{
        task: 'Example Todo',
        id: Date.now(),
        completed: false
      }]
    };
  }

  addTodo = (todoTask) => {
    const newTodo = {
      task: todoTask,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo],
    })
  }

  completeTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} completeTodo={this.completeTodo} />
        <TodoForm todo={this.state.todo} addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
