import React from 'react';
import { Component } from 'react/cjs/react.production.min';
//import './App.css';
//import { Routing } from './pages/componenets/routes';
class Child extends Component {

  state = {
    name: 'peter'
  }
  constructor(){
    super();
    this.state = {
      name: 'john'
    };
    console.log('child constructor');
  }
  componentWillMount(){
    console.log('child componentWillMount');
  }
  componentDidMount(){
    console.log('child componentDidMount');
  }
  componentWillReceiveProps(){
    console.log('child componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('child componentUpdate');
      return false;
  }

  render() {
    console.log('Child render');
    return (
      <div className="App">
      Child name:{this.props.name}
       {/*< Routing /*/}
     </div>
    );
  }
};
export default Child;
