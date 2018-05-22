import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { updateUser } from './actions/users-actions';

class App extends Component {
	constructor(props) {
		super(props);
		this.onUpdateUser = this.onUpdateUser.bind(this);
	}

	onUpdateUser(){
		this.props.onUpdateUser('Ahmet');
	}

	render() {
		console.log(this.props);
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>

				<h2>{  this.props.user }</h2>
				<button onClick={this.onUpdateUser}>Change the name</button>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		...state,
		myCount: props.count + 2
	};
};

const mapDispatchToProps = {
	onUpdateUser: updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);