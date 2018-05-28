import React, {Component} from 'react';
import { connect } from 'react-redux';
import NewMovieForm from '../NewMovieForm';
import { onNewMovieSubmit } from '../../actions/newMovie';

class NewMoviePage extends Component {
	render() {
		return (
			<div>
				<NewMovieForm
					newMovie={this.props.newMovie}
					onNewMovieSubmit={this.props.onNewMovieSubmit}/>
			</div>
		);
	}
}

const mapStateToProps = ({ newMovie }) => {
	return {
		newMovie
	}
};

const mapDispatchToProps = {
	onNewMovieSubmit
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);
