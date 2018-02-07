import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import Header from './components/header';
//import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <App />
, document.querySelector('.app'));
