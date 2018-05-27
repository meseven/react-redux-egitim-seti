export function setMovies(movies){
	return {
		type: "SET_MOVIES",
		movies
	}
}

export function fetchMovies(){
	return dispatch => {
		fetch('http://localhost:8080/api/movies')
			.then(res => res.json())
			.then(data => dispatch(setMovies(data.movies)))
	}
}