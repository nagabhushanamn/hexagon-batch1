import React, { Component } from 'react';

class TodoTextInput extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            text: this.props.text || ''
        }
    }

    handleChange(e) {
        this.setState({ text: e.target.value })
    }

    handleSubmit(e) {
        let value = e.target.value;
        if (e.which === 13) {
            this.props.onSave(value);
            if (this.props.newTodo) {
               this.setState({ text: '' })
            }
        }
    }

    handleBlur(e) {
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value)
        }
    }

    render() {
        let {text} = this.props;
        return (
            <input className="new-todo"
                placeholder={this.props.placeHolder}    
                value={this.state.text}
                onChange={this.handleChange.bind(this)}
                onKeyUp={(e) => { this.handleSubmit(e) } }
                onBlur={this.handleBlur.bind(this)}
                />
        );
    }
}

export default TodoTextInput;