import React, { Component } from 'react';
import TodoTextInput from './TodoTextInput';
import classnames from 'classnames'

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = { editing: false };
    }

    handleSave(id, text) {
        console.log(text);
        if (text.length === 0) {
            this.props.deleteTodo(id)
        } else {
            this.props.editTodo(id, text)
        }
        this.setState({ editing: false })
    }

    render() {

        let {todo, deleteTodo, completeTodo} = this.props;

        let element = null;

        if (this.state.editing) {
            element = (
                <TodoTextInput text={todo.title}
                    onSave={(text) => { this.handleSave(todo.id, text) } } />
            );
        } else {
            element = (
                <div className="view">
                    <input className="toggle" type="checkbox"
                        onChange={() => completeTodo(todo.id)}
                        checked={todo.completed} />
                    <label onDoubleClick={() => { this.setState({ editing: true }) } }> {todo.title} </label>
                    <button className="destroy" onClick={() => { deleteTodo(todo.id) } } />
                </div>
            );
        }

        return (
            <li className={classnames({
                completed: todo.completed
            })}>
                {element}
            </li>
        );
    }
}

export default TodoItem;