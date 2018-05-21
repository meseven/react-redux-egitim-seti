import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';

function reducer(state, action) {
	if (action.type === 'changeTheState') {
	  return action.payload.newState
	}
	return 'state';
}

const store = createStore(reducer);

console.log(store.getState());

const action = {
	type: 'changeTheState',
	payload: {
		newState: 'my new state'
	}
};

store.dispatch(action);
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
