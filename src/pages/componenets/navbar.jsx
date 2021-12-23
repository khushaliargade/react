import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
export function Navbar(props) {
  
    return (
            <div>
                <ul>
                    <li>
                        <Link to="/" class="link">Login</Link>
                    </li>
                    <li>
                        <Link onClick={props.register}>
                            {this.props.status ? "Home" : "Register"}
                        </Link>

                    </li>
                </ul>
            </div>
        )
    }

