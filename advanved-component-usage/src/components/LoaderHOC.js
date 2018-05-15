import React, {Component} from 'react';

const LoaderHOC = (WrappedComponent) => {
	return class LoaderHOC extends Component{
		render(){
			return this.props.posts.length === 0 ? <div>Loading...</div> : <WrappedComponent {...this.props} />
		}
	}
};

export default LoaderHOC;