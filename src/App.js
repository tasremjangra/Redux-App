import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RedComponent from './RedComponent';
import BlueComponent from './BlueComponent';
import Button from './Button';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Button />
        <RedComponent />
        <BlueComponent />
      </div>
    );
  }
}

export default App;
