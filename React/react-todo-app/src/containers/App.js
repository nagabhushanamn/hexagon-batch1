
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
                { id: 1, title: 'learn react', completed: false }
            ]
        };
    }

    addTodo(newTodo) {
        this.setState({todos:this.state.todos.concat(newTodo)});
    }

    render() {
        let {todos} = this.state;
        return (
            <section className="todoapp">
                <Header addTodo={this.addTodo.bind(this)}/>
                <MainSection todos={todos}/>
                <Footer />
            </section>

        );
    }
}

export default App;