import React from "react";
import Header from "./componenets/header";
import "./componenets/style.css"
class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        )
    }
}
export { Home }