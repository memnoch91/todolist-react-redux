/*eslint linebreak-style: ["error", "windows"]*/

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import initState from './initState';

export default function configureStore() {
    return createStore(
        rootReducer,
        initState,
        compose(
            applyMiddleware(thunkMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}
