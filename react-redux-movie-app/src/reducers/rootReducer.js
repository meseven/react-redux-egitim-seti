import { combineReducers } from 'redux';

import movies from './movies';
import newMovie from './newMovie';

export default combineReducers({
	movies,
	newMovie
})

