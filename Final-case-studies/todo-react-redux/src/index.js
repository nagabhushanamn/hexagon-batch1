

import React from 'react';
import ReactDOM from 'react-dom';
import 'todomvc-app-css/index.css';

import { Provider } from 'react-redux';

import App from './containers/App';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));