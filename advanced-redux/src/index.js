import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reduxPromiseMiddleware from 'redux-promise-middleware';

import { applyMiddleware, createStore } from 'redux';

const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: null
};

const reducer = (state = initialState, action) => {
	switch (action.type){
		case "FETCH_USERS_PENDING":
			return {
				...state,
				fetching: true
			};

		case "FETCH_USERS_REJECTED":
			return {
				...state,
				fetching: false,
				error: action.payload
			};

		case "FETCH_USERS_FULFILLED":
			return {
				...state,
				fetching: false,
				fetched: true,
				users: action.payload
			};

		default:
			return state;
	}
};

const middleware = applyMiddleware(reduxPromiseMiddleware(), thunk, logger);
const store = createStore(reducer, middleware);

const process = store.dispatch({
	type: "FETCH_USERS",
	payload: axios.get('https://jsonplaceholder.typicode.com/users/').then(res => res.data)
});

process.then(response => {
	console.log(response);
});

/*
store.dispatch(dispatch => {
	dispatch({
		type: 'FETCH_USERS_START'
	});

	axios.get('https://jsonplaceholder.typicode.com/users/')
		.then(response => response.data)
		.then(response => dispatch({
			type: 'RECEIVE_USERS',
			payload: response
		}))
		.catch(error => dispatch({
			type: 'FETCH_USERS_ERROR',
			payload: error
		}))
});*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
