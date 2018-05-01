import React, {Component} from 'react';
import List from './List';
import Form from './Form';

class Contacts extends Component {
	render() {
		return (
			<div>
				<List/>
				<Form/>
			</div>
		);
	}
}

export default Contacts;
