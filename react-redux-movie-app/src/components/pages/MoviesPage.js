import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MoviesList from '../MoviesList';

class MoviesPage extends Component {
	static propTypes = {
		movies: PropTypes.array.isRequired
	};

	render() {
		return (
			<div>
				<h2>Movies Page</h2>
				<MoviesList movies={this.props.movies}></MoviesList>
			</div>
		);
	}
}

const mapStateToProps = ({ movies }) => {
	return {
		movies
	}
};

export default connect(mapStateToProps)(MoviesPage);
