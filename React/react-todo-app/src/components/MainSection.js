import React, { Component } from 'react';

import TodoItem from './TodoItem';

class MainSection extends Component {
    render() {
       
        let {todos} = this.props;
        
        let todoItems = todos.map((todo, index) => {
            return (<TodoItem key={index} todo={todo}/>);
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

export default MainSection;