import React, {Component} from 'react';

class Form extends Component {
	constructor(){
		super();
		this.onChange = this.onChange.bind(this);
	}
	state = {
		name: '',
		phone: ''
	};

	onChange(e){
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		return (
			<div>
				<form>
					<input
						name="name"
						id="name"
						value={this.state.name}
						onChange={this.onChange}
						placeholder="Enter a name"/>
					<br/>
					<input
						name="phone"
						id="phone"
						value={this.state.phone}
						onChange={this.onChange}
						placeholder="Enter a phone"/>
					<button>Add</button>
				</form>
			</div>
		);
	}
}

export default Form;
