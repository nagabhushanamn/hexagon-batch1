import * as types from '../constants/ActionTypes'
import $ from 'jquery';


let apiUrl = "http://localhost:3000/todos";

//------------------------------------------------


// export function addTodo(text) {
//   return { type: types.ADD_TODO, text }
// }

// export function deleteTodo(id) {
//   return { type: types.DELETE_TODO, id }
// }

// async-action




export function loadALl() {

  return function (dispatch) {

    $.ajax({
      type: "GET",
      url: apiUrl,
      success: success,
      dataType: 'json'
    });

    function success(resp) {
      dispatch({ type: 'LOAD_TODOS', todos: resp });
    }

  }

}

export function addTodo(text) {

  return function (dispatch) {

    var newTodo = { title: text, completd: false };
    $.ajax({
      type: "POST",
      url: apiUrl,
      data: newTodo,
      success: success,
      //failure: failure,
      dataType: 'json'
    });

    function success(resp) {
      dispatch({ type: 'ADD_TODO', todo: resp });
    }

  }

}

export function deleteTodo(id) {

  return function (dispatch) {

    $.ajax({
      type: "delete",
      url: apiUrl + "/" + id,
      success: success,
      dataType: 'json'
    });

    function success(resp) {
      dispatch({ type: types.DELETE_TODO, id });
    }

  }
}

//------------------------------------------------

// sync-action

export function addTodoAsync(text) {
  return { type: types.ADD_TODO, text }
}

export function deleteTodoAsync(id) {
  return { type: types.DELETE_TODO, id }
}



export function editTodo(id, text) {
  return { type: types.EDIT_TODO, id, text }
}

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id }
}

export function completeAll() {
  return { type: types.COMPLETE_ALL }
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED }
}


//------------------------------------------------

