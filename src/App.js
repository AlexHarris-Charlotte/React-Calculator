import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator/Calculator.jsx';
import Header from './Components/Header/Header.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Calculator />
      </div>
    );
  }
}

export default App;
