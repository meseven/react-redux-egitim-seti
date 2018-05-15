import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';


import axios from 'axios';

class App extends Component {
  state = {
    posts: [],
    loading: true
  };

	componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(posts => posts.data)
      .then(posts => {
        this.setState({
          posts,
          loading: false
        });
      })
	}

	render() {
    return (
      <div className="App">
				<Posts {...this.state} />
      </div>
    );
  }
}

export default App;
