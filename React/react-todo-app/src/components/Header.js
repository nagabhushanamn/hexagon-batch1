import React, { Component } from 'react';

import TodoTextInput from './TodoTextInput';

class Header extends Component {
    render() {
        let {addTodo} = this.props;
        return (
            <header className="header">
                <TodoTextInput addTodo={addTodo}/>
            </header>
        );
    }
}

export default Header;