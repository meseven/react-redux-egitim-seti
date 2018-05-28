import React, {Component} from 'react';
import { Button, Form, Image } from 'semantic-ui-react'

class NewMovieForm extends Component {
	state = {
		title: '',
		cover: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<div>
				<h2>New Movie</h2>
				<Form>
					<Form.Field>
						<label>Title</label>
						<input
							id="title"
							name="title"
							value={this.state.title}
							onChange={this.handleChange}
							placeholder='Title' />
					</Form.Field>
					<Form.Field>
						<label>Cover Url</label>
						<input
							id="cover"
							name="cover"
							value={this.state.cover}
							onChange={this.handleChange}
							placeholder='Cover Url' />
					</Form.Field>
					<Image src={this.state.cover} size='small' />
					<div className="clearfix"></div>
					<Button type='submit'>Submit</Button>
				</Form>
			</div>
		);
	}
}

export default NewMovieForm;
