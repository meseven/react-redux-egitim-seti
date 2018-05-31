import React, {Component} from 'react';
import { connect } from 'react-redux';
import NewMovieForm from '../NewMovieForm';
import { onNewMovieSubmit } from '../../actions/newMovie';

class NewMoviePage extends Component {
	render() {
		return (
			<div>
				<h2>New Movie</h2>
				<NewMovieForm
					movie={this.props.movie}
					newMovie={this.props.newMovie}
					onNewMovieSubmit={this.props.onNewMovieSubmit}/>
			</div>
		);
	}
}

const mapStateToProps = ({ newMovie, movies }, props) => {
	return {
		newMovie,
		movie: movies.movieList.find(item => item._id === props.match.params._id)
	}
};

const mapDispatchToProps = {
	onNewMovieSubmit
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);
