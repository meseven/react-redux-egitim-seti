import React, {Component} from 'react';

class Child extends Component {
	constructor(props) {
		super(props);
		console.log('child constructor');
	}

	componentWillMount() {
		console.log('child componentWillMount');
	}

	componentDidMount() {
		console.log('child componentDidMount');
	}

	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps', nextProps);
	}

	render() {
		console.log('child render');
		return (
			<div>
				Child
			</div>
		);
	}
}

export default Child;
