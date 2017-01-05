
import React, { Component } from 'react';
import HitButton from './HitButton';
import Display from './Display';

class App extends Component {

    constructor() {
        super();
        console.log('App-component instantiated..');
        this.state = { count: 0 };
    }

    doCount(incBy) {
        this.setState({count:this.state.count+incBy});
    }

    render() {
        debugger;
        console.log('App-component rendered..');
        return (
            <div className="well">
                <HitButton clickHandler={this.doCount.bind(this)} incBy={1}/>
                <HitButton clickHandler={this.doCount.bind(this)} incBy={10}/>
                <HitButton clickHandler={this.doCount.bind(this)} incBy={100}/>
                <hr />
                <Display count={this.state.count} />
            </div>
            
        );
    }
}

export default App;