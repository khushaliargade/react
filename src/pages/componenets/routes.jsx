import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../login';
import Register from '../register';
import  {Home } from '../home';
//import Update from './Update';
import UpdateUser from './UpdateUser';
import UpdateData from './UpdateData';
import { updateUser } from '../../service/api';

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
          <Route path="/update/:id" element={<UpdateUser />}></Route>
          
          {/* <Route path="/update/:id" element={<UpdateData />}></Route> */}

          
        </Routes>
      </BrowserRouter>
    )
  }
}