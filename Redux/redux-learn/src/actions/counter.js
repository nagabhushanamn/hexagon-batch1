


export function increment(value) {
    return { type: 'INCREMENT', value };
}


export function incrementAsync(value) {
    // thunk    
    return function (dispatch) {
        // async...
        console.log('aync logic initiated.....');
        setTimeout(function () {
            console.log('aync callback invoked.......');
            console.log('INCREMENT action dispatched..');
            dispatch({ type: 'INCREMENT', value: 1000 });
        }, 5000);
    }
}


export function decrement(value) {
    return { type: 'DECREMENT', value };
}