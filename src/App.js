import React from 'react';
// import { Routes } from 'react-router-dom';
import { Component } from 'react/cjs/react.production.min';
import './App.css';
import { Routing }from './pages/componenets/routes';
class App extends Component {
  

  render() { 
    
    return (
      <div className="App">
        < Routing />
      
      
      </div>
    );
  }
};
export default App;