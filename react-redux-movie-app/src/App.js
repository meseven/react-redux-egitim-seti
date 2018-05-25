import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MoviesPage from './components/pages/MoviesPage';

import { Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Link to="movies">Movies</Link>
        </p>

				<Route path='/movies' component={MoviesPage}></Route>
      </div>
    );
  }
}

export default App;
