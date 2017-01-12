import React, { Component,PropTypes } from 'react';
import classnames from 'classnames';

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
            <input
                className={
                    classnames({
                        edit: this.props.editing,
                        'new-todo': this.props.newTodo
                    })
                }
                type="text"
                autoFocus="true"
                placeholder={this.props.placeHolder}
                value={this.state.text}
                onChange={this.handleChange.bind(this)}
                onKeyUp={(e) => { this.handleSubmit(e) } }
                onBlur={this.handleBlur.bind(this)}
                />
        );
    }
}




TodoTextInput.propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
}

export default TodoTextInput;