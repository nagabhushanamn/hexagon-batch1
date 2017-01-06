import React, { Component, PropTypes } from 'react';
import TodoTextInput from './TodoTextInput';
import classnames from 'classnames'

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = { editing: false };
    }

    handleSave(id, text) {
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
                    editing={this.state.editing}
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
                completed: todo.completed,
                editing: this.state.editing
            })}>
                {element}
            </li>
        );
    }
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
}

export default TodoItem;