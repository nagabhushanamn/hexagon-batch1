


var initialTodos = [
    {
        id: 1,
        title: 'Learn .js',
        completed: true
    }
];

function todos(state = initialTodos, action) {
    switch (action.type) {
        case "ADD_TODO": {
            // ..................
            // return [{ id: Math.random(), title: action.title, completed: false }, ...state];
            return [action.todo, ...state];
        }
        default: {
            return state;
        }
    }
}

export default todos;