import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Greeting from './hooks-quick-demos/Greeting';
import Demo1 from './hooks-quick-demos/Demo1';
import Demo2 from './hooks-quick-demos/Demo2';
import Demo3 from './hooks-quick-demos/Demo3';
import Demo4 from './hooks-quick-demos/Demo4';
import UseEffectDemo from './hooks-quick-demos/UseEffectDemo';
import ReduxHook from './redux-hooks/ReduxHook';
import UseReducerDemo from './useReducerDemo';
import Layout from './Layout';
import './App.css';
import AppRouter from './AppRouter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>      
    );
  }
}

export default App;
