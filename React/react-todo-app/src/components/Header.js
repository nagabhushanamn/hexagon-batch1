import React, { Component } from 'react';

import TodoTextInput from './TodoTextInput';

class Header extends Component {
    render() {
        let {addTodo} = this.props;
        return (
            <header className="header">
                <TodoTextInput
                    placeHolder="what needs to be done?"    
                    newTodo
                    onSave={(text) => { if (text.trim()) { addTodo(text) } } } />
            </header>
        );
    }
}

export default Header;