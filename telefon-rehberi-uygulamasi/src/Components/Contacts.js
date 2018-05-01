import React, {Component} from 'react';
import List from './List';
import Form from './Form';

class Contacts extends Component {
	state = {
		contacts: [{
			name: 'Mehmet',
			phone: '123131231'
		},{
			name: 'Mesut',
			phone: '9384590834905'
		}]
	};

	render() {
		return (
			<div>
				<List contacts={this.state.contacts}/>
				<Form/>
			</div>
		);
	}
}

export default Contacts;
