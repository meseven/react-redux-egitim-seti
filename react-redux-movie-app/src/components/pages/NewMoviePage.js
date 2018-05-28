import React, {Component} from 'react';
import { connect } from 'react-redux';
import NewMovieForm from '../NewMovieForm';

class NewMoviePage extends Component {
	render() {
		return (
			<div>
				<NewMovieForm/>
			</div>
		);
	}
}

const mapStateToProps = ({ newMovie }) => {
	return {
		newMovie
	}
};

export default connect(mapStateToProps, null)(NewMoviePage);
