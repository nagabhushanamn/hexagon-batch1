

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

let rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;