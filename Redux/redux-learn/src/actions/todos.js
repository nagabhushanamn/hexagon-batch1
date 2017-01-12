import $ from 'jquery';

export function addTodo(title) {
    return { type: 'ADD_TODO', title }
}

let api = "http://localhost:3000/todos";

export function addTodoAsync(title) {

    return function (dispatch) {

        // API call

        // dispatch({ type: 'ADDING_TODO' });

        var newTodo = { title, completd: false };
        $.ajax({
            type: "POST",
            url: api,
            data: newTodo,
            success: success,
            //failure: failure,
            dataType: 'json'
        });

        function success(resp) {
            dispatch({ type: 'ADD_TODO', todo: resp });
        }
        // function failure(error) {
        //     dispatch({ type: 'ADD_TODO_FAILED' }, resp);
        // }


    }


}