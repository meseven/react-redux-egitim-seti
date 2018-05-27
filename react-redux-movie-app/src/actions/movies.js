import { API_BASE } from '../config/env';
import axios from 'axios';

export function fetchMovies(){
	return dispatch => {
		axios.get(`${API_BASE}/movies`)
			.then(result => result.data)
			.then(data => console.log(data.movies))
			.catch(error => console.log(error))
	}
}