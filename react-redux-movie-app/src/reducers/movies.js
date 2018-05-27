import { FETCHED_MOVIES } from '../actions/movies';

const initialState = {
	fetching: false,
	fetched: false,
	movies: [],
	error: {}
};

export default (state = initialState, action) => {
	switch (action.type){
		case FETCHED_MOVIES:
			return {
				...state,
				movies: action.payload
			};
		default:
			return state;
	}
}