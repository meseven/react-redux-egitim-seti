import React from 'react';
import PropTypes from 'prop-types';

const InlineError = props => {
	return (
		<div className="inlineError">
			{ props.message }
		</div>
	);
};

InlineError.propTypes = {
	message: PropTypes.string.isRequired
};

export default InlineError;