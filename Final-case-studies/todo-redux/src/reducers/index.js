

import { combineReducers } from 'redux';
import todos from './todos';

let rootReducer = combineReducers({
    todos
});

export default rootReducer;