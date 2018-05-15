import React from 'react';

const News = ({ match }) =>
	<h1>News page: { match.params.id }</h1>;

export default News;