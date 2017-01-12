
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component{

    render() {
        return (
            <div className="well">

                <div className="row">
                    <div className="col-md-3 col-sm-3">
                        <ul className="nav stacked-nav active">
                            <li><Link to="todos">Todos</Link></li>
                            <li><Link to="about">About</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-9 col-sm-3">
                        {this.props.children}
                    </div>    
                </div>    

                
            </div>
        );
    }

}