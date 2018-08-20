/* eslint-disable no-console */
/*eslint linebreak-style: ["error", "unix"]*/
import initState from '../store/initState';

const now = () => new Date().getTime();
export default function(state = initState, action) {
    switch (action.type) {
    case 'GET_TODOS':
        return Object.assign({}, state, {
            todos: action.payload,
            when_loaded: now()
        });
    default:
        return state;
    }
    /*
    case 'ADD_TODO_FAILURE':
        console.error(action.error);
        return state;

    case 'ADD_TODO_REQUEST':
        return state;

    case 'DELETE_TODO_REQUEST':
        return state;

    case 'DELETE_TODO_SUCCESS':
        return Object.assign({}, state, {
            todos: {
                list: state.todos.list.filter(({ id }) => id !== action.id)
            }
        });

    case 'DELETE_TODO_FAILURE':
        console.error(action.error);
        return state;

    case 'EDIT_TODO_REQUEST':
        return state;

    case 'EDIT_TODO_SUCCESS':
        return Object.assign({}, state, {
            todos: {
                list: state.todos.list.map(todo => {
                    if (todo.id === action.data.id) {
                        todo.text = action.data.text;
                    }

                    return todo;
                })
            }
        });

    case 'EDIT_TODO_FAILURE':
        console.error(action.error);
        return state;

    case 'FETCH_TODOS_FAILURE':
        console.error(action.error);
        return state;

    case 'FETCH_TODOS_REQUEST':
        return state;

    case 'FETCH_TODOS_SUCCESS':
        return Object.assign({}, state, {
            todos: {
                list: action.data,
                when_loaded: now()
            }
        });

    case 'TOGGLE_FILTER':
        switch (action.name) {
        case 'active':
            return Object.assign({}, state, {
                filter: {
                    active: !state.filter.active,
                    all: false,
                    completed: false
                }
            });

        case 'all':
            return Object.assign({}, state, {
                filter: {
                    active: false,
                    all: !state.filter.all,
                    completed: false
                }
            });

        case 'completed':
            return Object.assign({}, state, {
                filter: {
                    active: false,
                    all: false,
                    completed: !state.filter.completed
                }
            });

        default:
            return state;
        }

    case 'TOGGLE_TODO_REQUEST':
        return state;

    case 'TOGGLE_TODO_SUCCESS':
        return Object.assign({}, state, {
            todos: {
                list: state.todos.list.map(todo => {
                    if (todo.id === action.data.id) {
                        todo.completed = action.data.completed;
                    }

                    return todo;
                })
            }
        });

    case 'TOGGLE_TODO_FAILURE':
        console.error(action.error);
        return state;


    */
}
