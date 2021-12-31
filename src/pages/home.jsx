import React from "react";
import { Header } from "./componenets/header";
import { Footer } from "./componenets/footer";
import { Navbar } from "./componenets/navbar";
//import { Calendar } from "react-calendar";
//import "react-calendar/dist/Calendar.css"
import UserTable from "./componenets/usertable";
//import ListUserComponent from "./componenets/ListUserComponent";
import update from './componenets/update'
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
                        {<update/> }
                    </div>
                    <div class="content">
                        {/* <Calendar 
                        defaultView ="month"
                        showDoubleView
                        
                        />          */}
                        <h3>THIS IS HOME</h3>
                        <h1>delete api</h1>
                         <UserTable/> 
                        
                        {/* <ListUserComponent/> */}
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
