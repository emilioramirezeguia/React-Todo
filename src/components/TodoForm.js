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

        this.setState({
            todo: ""
        })
    }

    render() {
        return (
            <div>
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
                </form>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;