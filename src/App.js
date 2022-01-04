import React from 'react';
import { Component } from 'react/cjs/react.production.min';
//import './App.css';
//import { Routing } from './pages/componenets/routes';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }
  counterClock(){
    this.setState({
      time: new Date().toLocaleTimeString()

    });
  }
  componentDidMount = () => {
    //setInterval(() => {
      this.intervalID = setInterval(() =>
      this.counterClock(),
      10000
      );}
      render(){
        return (
          <div className="time">
            <p><h1>{this.state.time}</h1>
            <h2>TIME INTERVAL AFTER 10 SEC</h2>
            
            </p>
          </div>
        )
      }
    }
    export default App;
  