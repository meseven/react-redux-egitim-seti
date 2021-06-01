import React, { Component } from 'react';
//import Child from './Child';

class App extends Component {
  state = {
    tl: 0
  };

	changeTl = (e) => {
	  this.setState({
      tl: e.target.value
    })
  };

	shouldComponentUpdate(nextProps, nextState) {
    //console.log('shouldComponentUpdate', nextProps, nextState);
	  return (nextState.tl % 10) === 0;
	}

	componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate çalıştı', nextProps, nextState);
	}

	componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
	}

	render() {
	  console.log('render çalıştı');
    return (
      <div className="App">
				<input name="tl" id="tl" onChange={this.changeTl} />
				<br/><br/>

        Her elma 10TL. <br/>
        { this.state.tl / 10 } tane elma alabilirsiniz.
      </div>
    );
  }
}

export default App;
