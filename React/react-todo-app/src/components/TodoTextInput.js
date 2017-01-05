import React, { Component } from 'react';

class TodoTextInput extends Component {

    handleSubmit(e) {
        let value = e.target.value;
        if (e.which === 13) {
            if (value.trim()) {
                this.props.addTodo({ id: Math.random(), title: value, completed: false });
                e.target.value = '';
            }
        }
    }

    render() {
        return (
            <input className="new-todo"
                onKeyUp={(e) => { this.handleSubmit(e) } }
                />
        );
    }
}

export default TodoTextInput;