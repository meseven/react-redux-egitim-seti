import React from 'react';
import NewsItem from './NewsItem';

class News extends React.Component{
	render(){
		const title = "react js";
		const description = "react description";

		return(
			<div>
				<NewsItem
					title={title}
					description={description} />
			</div>
		)
	}
}

export default News;