

import React from "react";
import { Header } from "./componenets/header";
import { Footer } from "./componenets/footer";
import { Navbar } from './componenets/navbar';
import Calendar from 'react-calendar'
import Hello from './componenets/Hello'
import Func from './componenets/Func'
import Classc from './componenets/Classc'
import Message from './componenets/Message'
import "./componenets/style.css"
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

                        <Calendar/>
                        <h3>THIS IS HOME</h3>
                        
                    </div>
                    <div>
                        <Hello/>
                    </div>
                    <div> 
                        <Func name="functional components using props"/>
                        <p>this is functional componenet</p>
                        
                    </div>
                    <div>
                        <Classc name="class componenet using props"/>
                    </div>
                    <div>
                        <Message/>
                    </div>
                    
                </div>
                <Footer />
            </div>
        )
    }
}
