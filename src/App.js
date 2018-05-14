import React, { Component } from 'react';
import Search from './components/Search';
import Main from './components/Main';
import Thumbnail from './components/Thumbnail';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        <Main/>
        <img src={logo} className="App-logo" alt="logo" />
        <Thumbnail/>
      </div>
    );
  }
}

export default App;
