import React from 'react';
import NewsItem from './NewsItem';

class News extends React.Component{
	render(){
		return(
			<div>
				{
					this.props.news.map(news =>
						<NewsItem
							title={news.title}
							description={news.description} />
					)
				}
			</div>
		)
	}
}

export default News;