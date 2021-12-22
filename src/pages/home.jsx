import React from "react";
import { Header } from "./componenets/header";
import { Footer } from "./componenets/footer";
import { Navbar } from "./componenets/navbar";
import { Calendar } from "react-calendar";
//import "react-calendar/dist/Calendar.css"
import "./componenets/style.css";
import Usertable from "../component/usertable";
export class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div class="grid">
          <div class="aside">
            <Navbar />
          </div>
          <div class="content">
            <Usertable />
            <h5>THIS IS HOME</h5>
            
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
