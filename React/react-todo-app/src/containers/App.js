
import React, { Component } from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'



const TODO_FILTERS = {
    [SHOW_ALL]: () => true,
    [SHOW_ACTIVE]: todo => !todo.completed,
    [SHOW_COMPLETED]: todo => todo.completed
}


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, title: 'learn .js', completed: true },
                { id: 2, title: 'learn react', completed: false }
            ],
            filter: SHOW_ALL
        };
    }

    //-----------------------------------------------------------------------------

    handleClearCompleted() {
        this.clearCompleted()
    }

    handleShow(filter) {
        this.setState({ filter })
    }

    
    renderFooter(completedCount) {
        const { todos, filter} = this.state;
        const activeCount = todos.length - completedCount

        if (todos.length) {
            return (
                <Footer
                    completedCount={completedCount}
                    activeCount={activeCount}
                    filter={filter}
                    onClearCompleted={this.handleClearCompleted.bind(this)}
                    onShow={this.handleShow.bind(this)} />
            )
        }
    }

    //-----------------------------------------------------------------------------

    addTodo(value) {
        this.setState({ todos: [{ id: Math.random(), title: value, completed: false }, ...this.state.todos] });
    }

    deleteTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    editTodo(id, text) {
        this.setState({
            todos: this.state.todos.map(todo =>
                todo.id === id ? Object.assign({}, todo, { title: text }) : todo
            )
        });
    }

    completeTodo(id) {
        this.setState({
            todos: this.state.todos.map(todo =>
                todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo
            )
        });
    }

    completeAll() {
        const areAllMarked = this.state.todos.every(todo => todo.completed);
        this.setState({
            todos: this.state.map(todo => Object.assign({}, todo, {
                completed: !areAllMarked
            }))
        });
    }

    clearCompleted() {
        this.setState({
            todos: this.state.todos.filter(todo => todo.completed === false)
        });

    }

    //-----------------------------------------------------------------------------

    render() {

        let {todos, filter} = this.state;

        const filteredTodos = todos.filter(TODO_FILTERS[filter]);
        const completedCount = todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0)


        return (
            <section className="todoapp">
                <Header addTodo={this.addTodo.bind(this)} />
                <MainSection todos={filteredTodos}
                    deleteTodo={this.deleteTodo.bind(this)}
                    editTodo={this.editTodo.bind(this)}
                    completeTodo={this.completeTodo.bind(this)} />
                {this.renderFooter(completedCount)}
            </section>

        );
    }
}

export default App;