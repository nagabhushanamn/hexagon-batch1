import React, { Component,PropTypes } from 'react';

import TodoItem from './TodoItem';

class MainSection extends Component {
    render() {
       
        let {todos,deleteTodo,editTodo,completeTodo} = this.props;
        
        let todoItems = todos.map((todo, index) => {
            return (
                <TodoItem key={index}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    completeTodo={completeTodo}
                    editTodo={editTodo} />
            );
        });

        return (
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <ul className="todo-list">
                    {todoItems}
                </ul>
            </section>
        );
    }
}


MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  //actions: PropTypes.object.isRequired
}


export default MainSection;