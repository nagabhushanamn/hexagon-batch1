
function counter(state = { count: 0 }, action) {

    switch (action.type) {
        case 'INCREMENT': {
            return Object.assign({}, state, { count: state.count + action.value })
        }
        case 'DECREMENT': {
            return Object.assign({}, state, { count: state.count - action.value })
        }
        default:
            return state;
    }

}

export default counter;