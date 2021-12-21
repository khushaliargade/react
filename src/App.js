import { render } from '@testing-library/react';
import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import './App.css';
import { Routing } from './pages/componenets/routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
    fetch('http://localhost:8080/test/hello/getusers')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
      console.log("hiii");
  };

  getusersList() {
    
     
  }
  render() {
    var { isLoaded, items } = this.state;
  
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          { < Routing /> }
          {/* <ul>
            {items.map(items => (
              <li key={items.id}>
                Firstname: {items.firstname} | LastName:{items.lastname} | Email:{items.email} | Password:{items.password}
              </li>
            ))}
          </ul>
   */}
  
        </div>
      );
  
    }
  };
  
}
export default App;
