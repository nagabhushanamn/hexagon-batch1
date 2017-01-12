



import store from './store';
import * as counterActions from './actions/counter';
import * as todosActions from './actions/todos';

// counterActions
store.subscribe(function () {
    let state = store.getState();
    console.log(state);
});


//  dispatch actions

// store.dispatch(counterActions.increment(1));
// store.dispatch(counterActions.increment(10));

// store.dispatch(counterActions.increment(100)); // sync
// store.dispatch(counterActions.incrementAsync()); // aysnc..

// store.dispatch(counterActions.decrement(1));
// store.dispatch(counterActions.decrement(10));
// store.dispatch(counterActions.decrement(100));


store.dispatch(todosActions.addTodoAsync('item1'));






