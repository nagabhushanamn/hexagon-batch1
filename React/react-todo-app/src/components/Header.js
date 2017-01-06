import React, { Component,PropTypes } from 'react';

import TodoTextInput from './TodoTextInput';

class Header extends Component {

    handleSave(text) {
        let {addTodo} = this.props;
        if (text.trim()) { addTodo(text) }
    }

    render() {

        return (
            <header className="header">
                <TodoTextInput
                    placeHolder="what needs to be done?"
                    newTodo
                    onSave={(text) => { this.handleSave(text) } } />
            </header>
        );
    }
}


Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}


export default Header;