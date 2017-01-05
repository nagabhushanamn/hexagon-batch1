import React, { Component } from 'react';

class Display extends Component {

    constructor() {
        super();
        console.log('Display-component instantiated');
    }

    render() {
        console.log('Display-component rendered');
        return (
            <div className="badge">
                {this.props.count}
            </div>
        );
    }
}

export default Display;