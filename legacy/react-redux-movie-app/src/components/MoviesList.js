import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react';
import { HashLoader } from 'react-spinners';

const MoviesList = ({ movies, deleteMovie }) => {
	const emptyMessage = (
		<p>There are no movies yet.</p>
	);

	const moviesList = (
		<div>

			<HashLoader
				size={40}
				color={'#36bdb3'}
				loading={movies.fetching}
			/>

			{
				movies.error.response
					? <h3>Error retrieving data!</h3>
					:
					<Grid stackable columns={3}>
						{
							movies.movieList.map(movie =>
								<MovieCard
									key={movie._id}
									deleteMovie={deleteMovie}
									movie={movie} />)
						}
					</Grid>
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
		movieList: PropTypes.array.isRequired
	}).isRequired
};

export default MoviesList;