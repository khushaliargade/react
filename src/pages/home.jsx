import React from "react";
import { Header } from "./componenets/header";
import { Footer } from "./componenets/footer";
import { Navbar } from './componenets/navbar';
//import { Calendar } from "react-calendar";
// import "react-calendar/dist/Calendar.css"
import "./componenets/style.css"
import UserTable from "./componenets/usertable";
import Hello from "./componenets/Hello";
import Lifecycle from "./componenets/Lifecycle";
export class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <Hello /></div>
                <div className="grid">
                    <div className="aside">
                        <Navbar />
                    </div>
                    <div className="content">
                        {/* <Calendar 
                        defaultView ="month"
                        showDoubleView
                        />*/}
                        <h3>THIS IS HOME</h3>
                        <UserTable />
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}