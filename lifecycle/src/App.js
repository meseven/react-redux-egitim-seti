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

	changeName = () => {
	  this.setState({
      name: 'Kenan'
    })
  };

	render() {
	  console.log('render');
    return (
      <div className="App">
        { this.state.name }
				<br/>
				<Child name={this.state.name}/>
        <button onClick={this.changeName}>Change the name</button>
      </div>
    );
  }
}

export default App;
