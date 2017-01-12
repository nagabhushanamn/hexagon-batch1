
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component{

    render() {
        return (
            <div className="well">
                   <ul className="nav stacked-nav active">
                        <li><Link to="todos/1">item1</Link></li>
                        <li><Link to="todos/2">item2</Link></li>
                    </ul>
                   {this.props.children}
            </div>
        );
    }

}