import React from 'react';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
	const emptyMessage = (
		<p>There are no movies yet.</p>
	);

	const moviesList = (
		<div>
			Movies list
		</div>
	);

	return (
		<div>
			{ movies.length === 0 ? emptyMessage : moviesList }
		</div>
	);
};

MoviesList.propTypes = {
	movies: PropTypes.object.isRequired
};

export default MoviesList;