import React, {Component} from 'react';

class Todo extends Component {
    render() {
        return (
            <div>
                Todo - {this.props.params.id}
            </div>
        );
    }
}

export default Todo;