import axios from 'axios';
/*
import {
    GET_TODOS,
    TODOS_LOADING,
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO
} from './types';
*/

const checkStatus = response => {
    if (response.ok) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
};

function getTodos() {
    return dispatch => {
        return axios
            .get('/api/todos/get')
            .then(res => {
                dispatch({
                    type: 'GET_TODOS',
                    payload: res.data
                });
            })
            .catch(error => {
                throw error;
            });
    };
}

function shouldLoadedTodos(state) {
    return { when_loaded: state.when_loaded === null };
}

export function getTodosIfNeeded() {
    return (dispatch, getState) => {
        if (shouldLoadedTodos(getState())) {
            return dispatch(getTodos());
        }
    };
}
