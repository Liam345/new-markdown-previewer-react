import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './components/user-input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Markdown Previewer</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        
        <div className="container">
        <UserInput />
        </div>
      </div>
    );
  }
}

export default App;
