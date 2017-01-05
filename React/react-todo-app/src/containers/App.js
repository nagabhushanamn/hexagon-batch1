
import React, { Component } from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, title: 'learn .js', completed: true },
                { id: 2, title: 'learn react', completed: false }
            ]
        };
    }

    addTodo(value) {
        this.setState({ todos: [{ id: Math.random(), title: value, completed: false }, ...this.state.todos] });
    }

    deleteTodo(id) {
        console.log(id);
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
        console.log(this.state.todos);
    }

    editTodo(id, text) {
        console.log(text);
        this.setState({
            todos: this.state.todos.map(todo =>
                todo.id === id ? Object.assign({}, todo, { title: text }) : todo
            )
        });
    }

    completeTodo(id) {
        this.setState({
            todos: this.state.todos.map(todo =>
                todo.id === id ?Object.assign({}, todo, { completed: !todo.completed }):todo
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

    render() {
        let {todos} = this.state;
        return (
            <section className="todoapp">
                <Header addTodo={this.addTodo.bind(this)} />
                <MainSection todos={todos}
                    deleteTodo={this.deleteTodo.bind(this)}
                    editTodo={this.editTodo.bind(this)}
                    completeTodo={this.completeTodo.bind(this)}/>
                <Footer />
            </section>

        );
    }
}

export default App;