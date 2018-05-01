import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		name: 'mehmet'
	};

	changeName (){
		this.setState({
			name: 'ahmet' + Math.floor(Math.random() * 3)
		});
		console.log(this.state);
	}

	render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
				<h1>{ this.state.name }</h1>
        <button onClick={ this.changeName.bind(this) }>Change the name</button>
      </div>
    );
  }
}

export default App;
