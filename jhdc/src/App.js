import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jason Hotelling</h1>
        </header>
        <p className="App-intro">
          <div><p><i>Updated 8/7/2018 3:52pm</i></p></div>
          <div><a href="https://www.jasonhotelling.com/IdentityPOC/">IdentityPOC</a></div>
          <div><a href="https://www.jasonhotelling.com/OBStats/">OBStats</a></div>
          <div><a href="https://www.jasonhotelling.com/OBTicker/">OBTicker</a></div>
        </p>
      </div>
    );
  }
}

export default App;
