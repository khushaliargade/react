// import React from 'react';
// import { Component } from 'react/cjs/react.production.min';
// import './App.css';
// import { Routing } from './pages/componenets/routes';
// class App extends Component {

//   render() {
//     return (
//       <div className="App">
//         {/* < Routing /> */}
//       </div>
//     );
//   }
// };
// export default App;
import React, { Component ,useState } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }
  updateTime(){
    this.setState(
      {
        time: new Date().toLocaleString(),
      }
    );
  }
  componentDidMount() {
    this.intervalID = setInterval(() =>
    this.updateTime(),
    10000
    );
  } 
  

  render() {
    return (
      <div className='App'>
      <h2> time interval of 10 sec </h2> <h1>{this.state.time}</h1>
      </div>

    );
  }

}
export default App;