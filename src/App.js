import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Slogan from './components/Slogan';
// import ParaBg from './components/ParaBg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slogan />
      </div>
    );
  }
}

export default App;