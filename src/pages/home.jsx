import React from "react";
import { Header } from "./componenets/header";
import { Footer } from "./componenets/footer";
import { Navbar } from './componenets/navbar';
//import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css"
import "./componenets/style.css"
import UserTable from "./componenets/usertable";
<<<<<<< Updated upstream
=======
import { Button, Grid } from "@material-ui/core";
//import ListUserComponent from "./componenets/ListUserComponent";
>>>>>>> Stashed changes
export class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>     
            <div className="grid">
                    <div className="aside">
                        <Navbar />
                    </div>
                    <div className="content">
                        {/* <Calendar 
                        defaultView ="month"
                        showDoubleView
<<<<<<< Updated upstream
                        />*/}
=======
                        
                        />          */}
                    
>>>>>>> Stashed changes
                        <h3>THIS IS HOME</h3>
                        <UserTable />
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
