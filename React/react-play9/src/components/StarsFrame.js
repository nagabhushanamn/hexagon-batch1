import React, { Component } from 'react';

class StarsFrame extends Component {
    render() {


        let stars = [];
        let {numberOfStars} = this.props;
        for (let i = 0; i < numberOfStars; i++) {
            stars.push(<span key={i} className="glyphicon glyphicon-star"></span>);
        }

        return (
            <div id="stars-frame">
                <div className="well">
                    {stars}
                </div>
            </div>
        );
    }
}

export default StarsFrame;