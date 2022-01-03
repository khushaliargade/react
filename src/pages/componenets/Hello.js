import React , { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    console.log(' constructor')

  }
  static getDerivedStateFromProps(){
    console.log(' getDerivedStateFromProps')
    return{};

}
 
componentDidMount(){
    console.log(' componentDidMount')   
}

  render() {
    console.log(' render')
    return (<p>Heloo</p>);
  }
}

export default App;