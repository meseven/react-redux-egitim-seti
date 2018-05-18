import React, { Component } from 'react';
import FirstNumber from './components/FirstNumber';
import SecondNumber from './components/SecondNumber';

class App extends Component {
  state = {
		firstNumber: Math.random(),
		secondNumber: Math.random()
  };

	componentDidMount() {
		setInterval(() => {
			this.setState({
				firstNumber: Math.random(),
			});
		}, 1000)
	}

	render() {
    return (
      <div className="App">
				<FirstNumber firstNumber={this.state.firstNumber} />
				<SecondNumber secondNumber={this.state.secondNumber} />
      </div>
    );
  }
}

export default App;
