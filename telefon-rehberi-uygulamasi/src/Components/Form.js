import React from 'react';

const Form = () => {
	return (
		<div>
			<form>
				<input name="name" id="name" placeholder="Enter name"/>
				<br/>
				<input name="phone" id="phone" placeholder="Enter a phone"/>
				<button>Add</button>
			</form>
		</div>
	);
};

export default Form;
