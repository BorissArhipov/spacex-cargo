import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';
import App from './components/app/app';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState } from './toLocalStorage/toLocalStorage';

const middleware = applyMiddleware(thunk);
const persistedState = loadState();

const store = createStore(
	reducer,
	persistedState,
    middleware
	);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>  
        </Router>
    </Provider>,
document.getElementById('root'));

export default store;
