

import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// const element = <h1>Hello, world!</h1>;
// const element = React.createElement('h1',null,'Hello World!');


// const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
// };

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// function getGreeting(user) {
//     if (user) {
//         return <h1>Hello, {formatName(user)}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;
// }

// const element = (
//     <div> Hello, {getGreeting(user)}!</div>
// );


// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );


// ReactDOM.render(element, document.getElementById('root'));

//-----------------------------------------------------------


// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
// }

// setInterval(tick, 1000);


//-----------------------------------------------------------


// function Welcome(props) {
//     return <h1>Welcome {props.name}</h1>;
// }


// class Welcome extends React.Component {
//     render() {
//         // this.props.name = 'Unknown';
//         return <h1>Welcome {this.props.name}</h1>;
//     }
// }


// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Welcome name={"Nag"} />
//                 <Welcome name={"Ria"} />
//             </div>
//         );
//     }
// }


// ReactDOM.render(<App />, document.getElementById('root'));


//-----------------------------------------------------------

// class Clock extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { date: new Date() };
//     }

//     componentDidMount() {
//         console.log('comp mounted');
//         this.timerId = setInterval(() => {
//             this.setState({ date: new Date() });
//         }, 10);

//     }
//     componentWillUnmount() {
//         console.log('comp will unmount');
//         clearInterval(this.timerId);
//     }

//     render() {
//         return (
//             <div>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }

// class App extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { status: true };
//         //this.clickHandler = this.clickHandler.bind(this);
//     }

//     removeClock() {
//         this.setState({ status: false });
//     }

//     clickHandler(e) {
    
//         console.log('u clicked...');
//         e.preventDefault();
//     }

//     render() {

//         if (this.state.status) {
//             return (
//                 <div>
//                     <button onClick={this.removeClock.bind(this)}>remove clock</button>
//                     <Clock />
//                     <hr />
//                     <a href onClick={()=>{this.clickHandler()}}> Click Me</a>
//                 </div>
//             );
//         } else {
//             return null;
//         }
//     }

// }


// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );


//------------------------------------------------------------


// class App extends React.Component {

//     sayHello(e) {
//         console.log("Hello " + this.refs.name.value);
//         e.preventDefault();
//     }    

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.sayHello.bind(this)}>
//                     Name : <input ref="name"/>
//                     <button type="submit" >submit</button>
//                 </form>    
//             </div>    
//         );
//     }

// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );


//-----------------------------------------------------------------



// class Message extends Component {
//     render() {
//         return (
//             <div>
//                 {this.context.user} - {this.props.message}
//             </div>
//         );
//     }
// }

// Message.propTypes = {
//     message: React.PropTypes.string.isRequired
// }

// Message.contextTypes = {
//     user: React.PropTypes.string
// };


// class MessageBox extends Component {
//     render() {
//         let messages = this.props.messages.map((message, index) => {
//             return (<Message message={message} key={index} />);
//         });
//         return (
//             <div>
//                 {messages}
//             </div>
//         );
//     }
// }



// class App extends Component {

//     getChildContext() {
//         return { user: "Nag" };
//     }

//     render() {
//         return (
//             <div>
//                 <MessageBox messages={["Hello", "Ola"]} />
//             </div>
//         );
//     }
// }


// App.childContextTypes = {
//     user: React.PropTypes.string
// };


// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );


//--------------------------------------------------------





// class App extends Component {
//     render() {
//         return (
//             <div className="well">
//                {this.props.children}
//             </div>
//         );
//     }
// }


// class Users extends Component {
//     render() {
//         return (
//             <div>
//                 <h1> Nag </h1>
//                 <h1> Ria </h1>
//             </div>

//         );
//     }
// }


// class Employees extends Component {
//     render() {
//         return (
//             <div>
//                 <h1> Emp1 </h1>
//                 <h1> Emp2 </h1>
//             </div>

//         );
//     }
// }

// ReactDOM.render(
//     <App>
//         <Employees />    
//     </App>,
//     document.getElementById('root')
// );

//---------------------------------------------------------------

// react Component lifecycle



class HelloComponent extends Component {

    constructor(props) {
        super(props);
        //this.state = { message: '' };
        console.log('HelloComponent-constructor');
    }

    componentWillMount() {
        console.log('HelloComponent-componentWillMount');
    }
    componentDidMount() {
        console.log('HelloComponent-componentDidMount');
        // server communication....
        //this.setState({ message: 'Hello' });
    }
    componentWillReceiveProps(nextProps) {
        console.log('HelloComponent-componentWillReceiveProps');
        console.log(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('HelloComponent-shouldComponentUpdate');
        // if (nextProps.message === 'Hello') {
        //     return false;
        // } else {
        //     return true;
        // }
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('HelloComponent-componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('HelloComponent-componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('HelloComponent-componentWillUnmount');
    }

    render() {
        console.log('HelloComponent-render');
        return (
            <div>
                {this.props.message}
            </div>
        );
    }
}


class App extends Component {

    constructor(props) {
        super(props);
        this.state = { message: 'Hello' };
    }

    changeMessage() {
        this.setState({ message: 'Ola' });
    }

    render() {
        return (
            <div>
                <HelloComponent message={this.state.message} />
                <hr />
                <button onClick={this.changeMessage.bind(this)}>greet</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
