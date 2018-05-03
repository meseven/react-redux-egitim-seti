import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    isLoading: true
  };

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(users => users.data)
			.then(users => {
				this.setState({
					users,
					isLoading: false
				});
			});
	}

	render() {
	  const { isLoading } = this.state;

    return (
      <div className="App">
        <h1>Users</h1>
        { isLoading ? 'Loading...' : '' }
        {
          !isLoading ? this.state.users.map(user =>
						<div key={ user.id } className={"userList"}>
							{ user.name } -  @{ user.username }
						</div>
					) : null
        }
      </div>
    );
  }
}

export default App;
