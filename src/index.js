import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
//import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import Header from './components/header';
import Hallo from './components/hallo';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<BrowserRouter>
    	<div>
	    	<App />
    	</div>
    </BrowserRouter>,
    document.getElementById('app')
);
