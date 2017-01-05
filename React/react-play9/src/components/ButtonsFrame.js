import React, { Component } from 'react';

class ButtonFrame extends Component {
    render() {

        let {status, checkAnswer, correct, acceptAnswer, redraw} = this.props;

        let button = null;

        switch (correct) {
            case true:
                button = (
                    <button className="btn btn-lg btn-success" onClick={acceptAnswer}>
                        <span className="glyphicon glyphicon-ok"></span>
                    </button>
                )
                break;
            case false:
                button = (
                    <button className="btn btn-lg btn-danger">
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                )
                break;

            default:
                button = (
                    <button className="btn btn-lg btn-primary"
                        disabled={status}
                        onClick={checkAnswer}>
                        =
                </button>
                )
        }

        return (
            <div id="button-frame">
                {button}<br/><br/>
                <button className="btn btn-warning btn-xs"
                    onClick={redraw}
                    disabled={!this.props.redraws}
                    >
                    <span className="glyphicon glyphicon-refresh"></span>
                    &nbsp;
                    {this.props.redraws}
                </button>
            </div>
        );
    }
}

export default ButtonFrame;