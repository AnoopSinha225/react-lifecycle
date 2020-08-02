import React, { Component } from 'react';

import './App.css';
import Child from './Child';
class App extends Component {

  // state = {
  //   name: 'peter'
  // }
  constructor() {
    super();
    this.state = {
      name: 'John'
    }
    console.log('constructor'); // called first to intialise 
  }

  componentWillMount() {
    if (window.innerWidth < 800) {
      this.setState({ innerWidth: window.innerWidth }); // set width when inner screen width is less then, before render
    }
    console.log('componentWillMount'); // called before render methods once
  }

  componentDidMount() {
    console.log('componentDidMount'); // called after parent render methods finished execute intially
  }

  changeState() {
    this.setState({ name: 'Alex' }) // once change in state render called to update 
    console.log("hihgshg");
  }

  render() {
    console.log('render');
    console.log('Width', this.state.innerWidth)
    return (
      <div className="App">

        name: {this.state.name}<br />
        Inner Width: {this.state.innerWidth}<br/>
        <button onClick={this.changeState.bind(this)}> Click to Change State</button>
        <Child name={this.state.name} />
      
      </div>
    );
  }
}

export default App;
