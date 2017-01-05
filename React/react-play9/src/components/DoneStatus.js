import React, { Component } from 'react';

class DoneFrame extends Component {
    render() {
        return (
            <div>
                <div className="well text-center">
                    <h2>{this.props.doneStatus}</h2>
                    <button className="btn btn-default"
                        onClick={this.props.resetGame}>
                        Play again
                </button>
                </div>
            </div>
        );
    }
}

export default DoneFrame;