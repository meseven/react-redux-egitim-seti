import React, {Component} from 'react';

class Posts extends Component {
	render() {
		return (
			<div>
				{
					this.props.loading ? <div>loading...</div> :g
					this.props.posts.map(post =>
						<div key={post.id}>
							{ post.title }
						</div>
					)
				}
			</div>
		);
	}
}

export default Posts;
