import React, { Component } from 'react';

class TodoItem extends Component {

     

    render() {
        let {todo} = this.props;
        return (
            <li>
                <div className="view">
                    <input className="toggle" type="checkbox"
                        onChange={() => { }}
                        checked={todo.completed} />
                    <label> {todo.title} </label>
                    <button className="destroy" />
                </div>
            </li>
        );
    }
}

export default TodoItem;