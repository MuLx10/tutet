import React, { Component } from 'react';
import './App.css';
import ZooSearch from './js/zooSearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="zoo-modal-text">Load From Zoo</h1> 
        </header>
        <ZooSearch></ZooSearch>
      </div>
    );
  }
}

export default App;
