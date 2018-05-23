import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

import { applyMiddleware, createStore } from 'redux';

const initialState = {
	count: 1,
	values: [],
	user: "Mehmet"
};

const reducer = (state = initialState, action) => {
	switch (action.type){
		case "ADD":
			return {
				...state,
				count: state.count + action.payload,
				values: [...state.values, action.payload]
			};
		case "SUBTRACT":
			return {
				...state,
				count: state.count - action.payload,
				values: [...state.values, action.payload],
				user: "Ahmet"
			};
		default:
			return state;
	}
};

const middleware = applyMiddleware(logger);
const store = createStore(reducer, middleware);

store.dispatch({
	type: "ADD",
	payload: 1
});

store.dispatch({
	type: "ADD",
	payload: 10
});

store.dispatch({
	type: "SUBTRACT",
	payload: 5
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
