import React from "react";
import { Header } from "./componenets/header";
import "./componenets/style.css";
import UserTable from "./componenets/usertable";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <div>
            <UserTable />
          </div>
        </div>
      </div>
    );
  }
}
