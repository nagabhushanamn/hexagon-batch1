import React, { Component } from 'react';

class HitButton extends Component {

    constructor() {
        super();
        console.log('HitButton-component instantiated..');
    }

    clickHandler() {
        console.log('hit...');
        this.props.clickHandler(this.props.incBy);
    }

    render() {
        console.log('HitButton-component rendered..');
        return (
            <div>
                <button className="btn btn-primary"
                    onClick={this.clickHandler.bind(this)}>
                    +{this.props.incBy}
                </button>
            </div>
        );
    }
}

export default HitButton;