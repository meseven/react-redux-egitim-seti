import React, { Component } from 'react';
import Child from './Child';

class App extends Component {
  state = {
    name: 'Mehmet'
  };

	constructor(props) {
		super();
		console.log("constructor");
	}

	componentWillMount() {
    console.log('componentWillMount');
	}

	componentDidMount() {
    console.log('componentDidMount');
	}

	render() {
	  console.log('render');
    return (
      <div className="App">
        { this.state.name }
				<br/>
				<Child/>
      </div>
    );
  }
}

export default App;
