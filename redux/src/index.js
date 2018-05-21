import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux';

function userReducer(state = '', action) {
	return state;
}

function productReducer(state = [], action) {
	return state;
}

const rootReducer = combineReducers({
	products: productReducer,
	user: userReducer
});
const store = createStore(rootReducer);

console.log(store.getState());


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
