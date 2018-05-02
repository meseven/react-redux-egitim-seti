import React, { Component } from 'react';

class App extends Component {

  state = {
    name: 'Mehmet'
  };

	constructor(props) {
		super();
		console.log("constructor");

		this.state = {
		  name: 'Kenan'
    }
	}

	componentWillMount() {
    console.log('componentWillMount');
	}

	render() {
	  console.log('render');
    return (
      <div className="App">
        { this.state.name }
      </div>
    );
  }
}

export default App;
