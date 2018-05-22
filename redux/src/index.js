import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import thunk from 'redux-thunk';
import { compose, applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
	products: productReducer,
	user: userReducer
});

const allEnhancers = compose(
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
	rootReducer,
	{
		products: [{
			name: 'Samsung',
			type: 'TV'
		}],
		user: 'Mehmet'
	},
	allEnhancers
);

ReactDOM.render(
	<Provider store={store}>
		<App count={4} />
	</Provider>, document.getElementById('root'));
registerServiceWorker();