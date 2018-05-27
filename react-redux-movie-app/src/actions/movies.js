import { API_BASE } from '../config/env';
import axios from 'axios';

export const FETCHED_MOVIES = "FETCHED_MOVIES";

export function fetchMovies(){
	return dispatch => {
		axios.get(`${API_BASE}/movies`)
			.then(result => result.data)
			.then(data => dispatch({
				type: FETCHED_MOVIES,
				payload: data.movies
			}))
			.catch(error => console.log(error))
	}
}