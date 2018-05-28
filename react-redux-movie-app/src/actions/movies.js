import { API_BASE } from '../config/env';
import axios from 'axios';

export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";
export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_REJECTED";

export function fetchMovies(){
	return dispatch => {
		dispatch({
			type: "FETCH_MOVIES",
			payload: axios.get(`${API_BASE}/movies`)
				.then(result => result.data.movies)
		})
	}
}