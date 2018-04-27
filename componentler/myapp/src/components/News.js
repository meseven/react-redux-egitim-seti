import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

class News extends React.Component{
	static propTypes = {
		news: PropTypes.array.isRequired,
		name: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string
		]).isRequired,
	};

	render(){
		const elements = this.props.news.map(news =>
			<NewsItem
				key={news.id}
				title={news.title}
				description={news.description} />
		);

		return(
			<div>
				{ this.props.name }
				{ elements }
			</div>
		)
	}
}

export default News;