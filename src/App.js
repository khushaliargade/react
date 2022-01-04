import React, { Component } from "react";
//import {Component} from 'react/cjs/react.production.min';
class App extends Component{
constructor(props){
    super(props);
     this.state ={
       
    time: new Date().toLocaleTimeString()
    } 
  }
    updateClock(){
      this.setState({
      time: new Date().toLocaleTimeString()
      });
      }
      componentDidMount() {
        this.intervalID = setInterval(() =>
        this.updateClock(),
        10000
        );}
        render() {
          return (
          <div className="Time">
               <p><h1>{this.state.time}</h1>
               <h2>this is from state </h2>
               </p>
          </div>
          );}
  }
  export default App;