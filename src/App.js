import React, { Component } from 'react';
import Greeting from './Greeting';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting />
        <Demo1 />
        <Demo2 />
        <Demo3 />
        <Demo4 />
      </div>
    );
  }
}

export default App;
