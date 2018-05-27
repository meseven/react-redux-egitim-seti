import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react'

const MoviesList = ({ movies }) => {
	const emptyMessage = (
		<p>There are no movies yet.</p>
	);

	const moviesList = (
		<div>
			{
				movies.error.response
					? <h3>Error retrieving data!</h3>
					: movies.movies.map(movie => <MovieCard key={movie._id} movie={movie} />)
			}
		</div>
	);

	return (
		<div>
			{ movies.length === 0 ? emptyMessage : moviesList }
		</div>
	);
};

MoviesList.propTypes = {
	movies: PropTypes.shape({
		movies: PropTypes.array.isRequired
	}).isRequired
};

export default MoviesList;