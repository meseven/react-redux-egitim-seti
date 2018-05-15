import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

const News = ({ match }) => {
  return(<h1>News page: { match.params.id }</h1>)
};

class App extends Component {
  render() {
    return (
			<Router>
        <div>
          <NavLink activeClassName="activelink" exact to="/">Homepage</NavLink> <br/>
          <NavLink activeClassName="activelink" exact to="/contact">Contact</NavLink> <br/>
          <NavLink activeClassName="activelink" exact to="/news/2">News</NavLink>

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

					<Route path="/news/:id" exact strict component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
