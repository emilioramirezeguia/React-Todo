import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ""
        }
    }

    handleChange = event => {
        this.setState({
            todo: event.target.value
        })

    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.todo)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input
                    type="text"
                    name="todo"
                    placeholder="...todo"
                    value={this.state.todo}
                    onChange={this.handleChange}
                    required
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;