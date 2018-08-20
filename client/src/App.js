/*eslint linebreak-style: ["error", "unix"]*/
import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { getTodosIfNeeded } from './actions';

class App extends Component {
    componentDidMount() {
        this.props.getTodosIfNeeded();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const todosList = state.todos;
    const ongoingTodosCount = todosList.reduce((accum, todo) => {
        return todo.todoComplete ? accum : accum + 1;
    }, 0);
    const completeTodos = todosList.filter(({ todoComplete }) => {
        return todoComplete;
    });
    return Object.assign({}, state, {
        todosList,
        ongoingTodosCount,
        completeTodosCount: todosList.length - ongoingTodosCount,
        completeTodos
    });
};

const mapDispatchToProps = dispatch => {
    return {
        getTodosIfNeeded() {
            dispatch(getTodosIfNeeded());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
