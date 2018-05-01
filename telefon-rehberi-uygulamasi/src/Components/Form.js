import React, {Component} from 'react';

class Form extends Component {
	state = {

	};

	render() {
		return (
			<div>
				<form>
					<input name="name" id="name" placeholder="Enter a name"/>
					<br/>
					<input name="phone" id="phone" placeholder="Enter a phone"/>
					<button>Add</button>
				</form>
			</div>
		);
	}
}

export default Form;
