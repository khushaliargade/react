import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Login } from '../login';
import  Register  from '../register';
import { Home } from '../home';
export class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
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