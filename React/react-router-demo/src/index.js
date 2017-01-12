

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Todos from './components/Todos';
import Todo from './components/Todo';
import About from './components/About';

import { Router, Route , browserHistory , hashHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <Route path="/todos" component={Todos}>
                 <Route path="/todos/:id" component={Todo} />
            </Route>    
            <Route path="/about" component={About}/>
        </Route>    
    </Router>    
    , document.getElementById('root'));