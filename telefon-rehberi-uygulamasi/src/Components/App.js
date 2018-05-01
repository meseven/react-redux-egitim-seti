import React, { Component } from 'react';
import '../App.css';

import Contacts from './Contacts';

class App extends Component {
	state = {
		contacts: [{
			name: 'Mehmet',
			phone: '123131231'
		},{
			name: 'Mesut',
			phone: '9384590834905'
		}]
	};

  render() {
    return (
      <div className="App">
				<Contacts contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
