import React, {PureComponent} from 'react';

class SecondNumber extends PureComponent {
	render() {
		console.log('SecondNumber rendering...');
		return (
			<div>
				{ this.props.secondNumber }
			</div>
		);
	}
}

export default SecondNumber;
