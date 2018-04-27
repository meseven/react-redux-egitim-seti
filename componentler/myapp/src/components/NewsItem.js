import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../NewsItem.css';

class NewsItem extends Component{
	static propTypes = {
		newsData: PropTypes.shape({
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired
		}).isRequired
	};

	render(){
		console.log(this.props);
		const { title, description } = this.props.newsData;
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