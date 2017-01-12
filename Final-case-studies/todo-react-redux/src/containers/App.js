
import React, { Component } from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

import * as actions from '../actions/todos';

import { bindActionCreators } from 'redux';
import { connect, } from 'react-redux';


const TODO_FILTERS = {
    [SHOW_ALL]: () => true,
    [SHOW_ACTIVE]: todo => !todo.completed,
    [SHOW_COMPLETED]: todo => todo.completed
}


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: SHOW_ALL
        };
    }

    componentDidMount() {
        let {actions} = this.props;
        actions.loadAll();
    }

    //-----------------------------------------------------------------------------

    handleClearCompleted() {
        this.props.actions.clearCompleted()
    }

    handleShow(filter) {
        this.setState({ filter })
    }


    renderFooter(completedCount) {
        const { todos} = this.props;
        const {filter} = this.state;
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

    render() {

        let {todos, actions} = this.props;
        let {filter} = this.state;

        const filteredTodos = todos.filter(TODO_FILTERS[filter]);
        const completedCount = todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0)


        return (
            <section className="todoapp">
                <Header addTodo={actions.addTodo} />
                <MainSection todos={filteredTodos} {...actions} />
                {this.renderFooter(completedCount)}
            </section>

        );
    }
}


function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) };
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);