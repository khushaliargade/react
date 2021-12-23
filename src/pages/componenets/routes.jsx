import React from 'react';
import {BrowserRouter , Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Login } from '../login';
import Register from '../register';
import { Home } from '../home';
import { Navbar } from './navbar';

 export class Routing extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      auth:-1,   //1-user registered   , 0-user not registered
    };
  }



  RegisterHandler = () => {
    this.setState({ auth: !this.state.auth });
};

  render() {
    return (
      <BrowserRouter>
      <Navbar register= {this.registerHandler} status={this.state.auth}/>
        <Routes>
          <Route path="/" element={<Login />} >
          </Route>
         <Route path="/register" element={<Register />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
 //export default Routing