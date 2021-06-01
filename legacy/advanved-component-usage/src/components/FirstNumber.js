import React, {Component} from 'react';
import styled from 'styled-components';

const Title = styled.div`
	color: blue
`;

class FirstNumber extends Component {
	render() {
		console.log('FirstNumber rendering...');
		return (
			<div>
				<Title>{ this.props.firstNumber }</Title>
			</div>
		);
	}
}

export default FirstNumber;
