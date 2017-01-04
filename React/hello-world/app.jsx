


// es5 - without JSX

// var HelloWorld = React.createClass({
//     render: function () {
//         // must return react element/component
//         var divEle = React.createElement('div', null, 'Welcome to React-world');
//         return divEle;
//     }
// });

// var hwComp = React.createElement(HelloWorld);

// ReactDOM.render(hwComp,document.getElementById('root'));


//-------------------------------------------------------------


// es5 - with JSX

// var HelloWorld = React.createClass({
//     render: function () {
//         return (
//             <div>Welcome to React-World again</div>
//         );
//     }
// });

// var hwComp = <HelloWorld />

// ReactDOM.render(hwComp,document.getElementById('root'));

//-------------------------------------------------------------

// es6

class HelloWorld extends React.Component {
    constructor() {
        super();
        console.log('HelloWorld component instantiated...');
    }
    render() {
        console.log('HelloWorld component rendered...');
        return (
            <div>
                Welcome to react-world with ES6 syntax
            </div>
        );
    }
}

var hwComp = <HelloWorld />

ReactDOM.render(hwComp, document.getElementById('root'));