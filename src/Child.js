import React, { Component } from 'react';

import './App.css';

class Child extends Component {

  // state = {
  //   name: 'peter'
  // }
  constructor() {
    super();
    this.state = {
      name: 'Peter'
    }
    console.log('Child constructor'); // called when parent component render, in child called first
  }

  componentWillMount() {
    if (window.innerWidth < 700) {
      this.setState({ innerWidth: window.innerWidth });
    }
    console.log('Child componentWillMount');  // called before render methods once in child
  }

  componentDidMount() {
    console.log(' Child componentDidMount'); // called after child render methods
  }
  render() {
    console.log(' Child render'); // called after componentWillMount and before componentDidMount
    console.log('Width', this.state.innerWidth)

    return (
      <div className="App">
        Inner Width: {this.state.innerWidth}<br />
        child name: {this.state.name}
      </div>
    );
  }
}

export default Child;
