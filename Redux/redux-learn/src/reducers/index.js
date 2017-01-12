

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

let rootReducer = combineReducers({
    todoCount: counter,
    allTodos: todos
});

export default rootReducer;