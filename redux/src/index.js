import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux';

function userReducer(state = '', action) {
	switch(action.type){
		case 'userUpdate':
			return action.payload;

		default:
			return state;
	}
}

function productReducer(state = [], action) {
	return state;
}

const rootReducer = combineReducers({
	products: productReducer,
	user: userReducer
});
const store = createStore(
	rootReducer,
	{
		products: [{
		name: 'Samsung',
		type: 'TV'
	}],
		user: 'Mehmet'
	},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const updateUserAction = {
	type: 'userUpdate',
	payload: {
		user: 'Ahmet'
	}
}

store.dispatch(updateUserAction);

console.log(store.getState());


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
