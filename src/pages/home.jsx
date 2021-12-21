
import React from "react";
import { Header } from "./componenets/header";
import { Footer } from "./componenets/footer";
import { Navbar } from './componenets/navbar';
//import Calendar from 'react-calendar'
//import Hello from './componenets/Hello'
//import Func from './componenets/Func'
//import Classc from './componenets/Classc'
//import Message from './componenets/Message'
import "./componenets/style.css"

import UserTable from "./componenets/usertable";
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


                        <h3>THIS IS HOME</h3>

                   
                        <UserTable />

                </div>
                <Footer />
            </div>
            </div>
        )
    }
}
