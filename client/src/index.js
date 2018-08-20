/*eslint linebreak-style: ["error", "unix"]*/
import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // eslint-disable-line no-unused-vars
import { BrowserRouter as Router, Route } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import configureStore from './store/configStore';

import App from './App';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/active" component={App} />
                <Route exact path="/complete" component={App} />
                <Route exact path="/all" component={App} />
            </div>
        </Router>
    </Provider>,

    document.getElementById('root')
);
