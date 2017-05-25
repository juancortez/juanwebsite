import 'babel-polyfill';
import './../scss/style.scss';
import React 							              from 'react';
import ReactDOM 						            from "react-dom";
import {Provider} 						          from 'react-redux';
import {createStore}                    from 'redux';
import allReducers 					            from './reducers/index';
import registerServiceWorker 			      from './registerServiceWorker';
import { BrowserRouter as Router}       from 'react-router-dom';

import WebRoutes                         from './components/web-routes';

const store = createStore(allReducers);

ReactDOM.render(
	<Router>
    	<Provider store={store}>
    		<WebRoutes/>
	    </Provider>
	</Router>,
    document.getElementById('root')
);
registerServiceWorker();
	



 

