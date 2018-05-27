import { API_BASE } from '../config/env';
import axios from 'axios';

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";

export function fetchMovies(){
	return dispatch => {
		axios.get(`${API_BASE}/movies`)
			.then(result => result.data)
			.then(data => dispatch({
				type: FETCH_MOVIES,
				payload: data.movies
			}))
			.catch(error => dispatch({
				type: FETCH_MOVIES_ERROR,
				payload: error
			}))
	}
}