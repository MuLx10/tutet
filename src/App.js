import React, { Component } from 'react';
import './App.css';
import ZooSearch from './js/zooSearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ZooSearch></ZooSearch>
      </div>
    );
  }
}

export default App;
