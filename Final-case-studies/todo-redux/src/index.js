



import store from './store';
import * as todosActions from './actions/todos';

store.subscribe(function () {
    let state = store.getState();
    console.log(state.todos);
});

store.dispatch(todosActions.loadALl());
store.dispatch(todosActions.addTodo('Live Life'));






