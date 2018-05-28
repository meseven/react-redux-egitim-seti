import React, {Component} from 'react';
import { Button, Form, Image } from 'semantic-ui-react'

class NewMovieForm extends Component {
	state = {
		title: '',
		cover: ''
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
							value={this.state.title}
							onChange={this.handeChange}
							placeholder='Title' />
					</Form.Field>
					<Form.Field>
						<label>Cover Url</label>
						<input
							id="cover"
							value={this.state.cover}
							onChange={this.handeChange}
							placeholder='Cover Url' />
					</Form.Field>
					<Image src='/assets/images/wireframe/image.png' size='small' />
					<div className="clearfix"></div>
					<Button type='submit'>Submit</Button>
				</Form>
			</div>
		);
	}
}

export default NewMovieForm;
