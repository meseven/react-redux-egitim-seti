import React from 'react';

class NewsForm extends React.Component{
	constructor(props) {
		super(props);
	}

	addButton(){
		this.props.addNews();
	};

	render(){
		return(
			<div>
				<button onClick={ () => this.addButton() }>Add</button>
			</div>
		)
	}
}

export default NewsForm;
