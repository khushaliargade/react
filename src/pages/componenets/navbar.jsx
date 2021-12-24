import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
export class Navbar extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/" class="link">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" class="link">Register</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

