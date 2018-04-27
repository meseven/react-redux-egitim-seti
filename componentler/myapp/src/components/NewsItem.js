import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../NewsItem.css';

class NewsItem extends Component{
	render(){
		const { title, description } = this.props;
		return(
			<div>
				<h1 className="title">{ title }</h1>
				<p>
					{ description }
				</p>
			</div>
		)
	}
}

export default NewsItem;