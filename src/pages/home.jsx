import React from "react";
import { Header } from "./componenets/header";
import { Footer } from "./componenets/footer";
import { Navbar } from './componenets/navbar';
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
                        <h3>THIS IS HOME</h3>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
