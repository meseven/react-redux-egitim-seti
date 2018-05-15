import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const News = () => {
  return(<h1>News page</h1>)
};

class App extends Component {
  render() {
    return (
			<Router>
        <div>
					<Route path="/" exact render={
            () => {
              return(<h1>Home page</h1>)
            }
          } />

					<Route path="/contact" exact strict render={
						() => {
							return(<h1>Contact page</h1>)
						}
					} />

					<Route path="/news" exact strict component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
