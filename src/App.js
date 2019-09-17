import React, { Component } from 'react';

import Speak from './components/speak';
import logo from './logo.svg';
import './App.css';







//Better Option
export const asyncFunc = () => {
  return new Promise((resolve) => { // don't forget to return!
    setTimeout(() => {
      // callback(); // looks like we will need a spy
      resolve('Success');
    }, 1000); // will this block the test for a full second??
  });
}

class App extends Component {
  state = {
    message: ''
  }
  speak = () => {
    this.setState({message: "Hello"})
  }
//avoid doing unless you have a truly static function
   static asyncFunc2 = () => {
    return new Promise((resolve) => { // don't forget to return!
      setTimeout(() => {
        // callback(); // looks like we will need a spy
        resolve('Success');
      }, 1000); // will this block the test for a full second??
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and manually reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Speak speak = {this.speak} message = {this.state.message}/>
        </header>
      </div>
    );
  }
}

export default App;
