



import store from './store';
import * as counterActions from './actions/counter';
import * as todosActions from './actions/todos';


store.subscribe(function () {
    let new_state = store.getState();
    console.log(new_state);
});


//  dispatch actions

store.dispatch(counterActions.increment(1));
store.dispatch(counterActions.increment(10));
store.dispatch(counterActions.increment(100));

store.dispatch(counterActions.decrement(1));
store.dispatch(counterActions.decrement(10));
store.dispatch(counterActions.decrement(100));


store.dispatch(todosActions.addTodo('Take Break'));






