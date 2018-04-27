import React, { Component } from 'react';
import '../NewsItem.css';

class NewsItem extends Component{
	render(){
		return(
			<div>
				<h1 className="title">Hello React</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dicta dolorem doloremque, est nihil odit omnis reiciendis saepe, sed, sequi similique tenetur. Aut esse exercitationem facere itaque modi neque rerum.
				</p>
			</div>
		)
	}
}

export default NewsItem;