import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        {
          this.state.loading ? <div>Loading...</div> :
            this.state.posts.map(post => <div key={post.id}>
							<h5>{post.title}</h5>
						</div>
					)
        }
      </div>
    );
  }
}

export default App;
