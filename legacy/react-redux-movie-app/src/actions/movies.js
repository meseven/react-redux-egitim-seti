import { API_BASE } from '../config/env';
import axios from 'axios';

export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";
export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_REJECTED";

export const DELETE_MOVIE_PENDING = "DELETE_MOVIE_PENDING";
export const DELETE_MOVIE_FULFILLED = "DELETE_MOVIE_FULFILLED";
export const DELETE_MOVIE_REJECTED = "DELETE_MOVIE_REJECTED";

export function fetchMovies(){
	return dispatch => {
		dispatch({
			type: "FETCH_MOVIES",
			payload: axios.get(`${API_BASE}/movies`)
				.then(result => result.data.movies)
		})
	}
}

export function deleteMovie(id){
	return dispatch => {
		dispatch({
			type: "DELETE_MOVIE",
			payload: axios.delete(`${API_BASE}/movies/${id}`)
				.then(result => Object.assign({}, result, { id }))
		})
	}
}