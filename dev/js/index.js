import 'babel-polyfill';
import './../scss/style.scss';
import React 							from 'react';
import ReactDOM 						from "react-dom";
import {Provider} 						from 'react-redux';
import {createStore, applyMiddleware}   from 'redux';
import allReducers 					    from './reducers/index';
import App 								from './components/App';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
