import React from "react";
import loginImg from "../assets/login.png"
import "./componenets/style.css"
import { Link } from "react-router-dom";
export class Login extends React.Component {
    render() {
        return (
            <div>
                <img src={loginImg} alt="" />
                <form>
                    <input type='email' name='email' placeholder='email...' required />
                    <input type='password' name='pwd' placeholder='password...' required />
                    <Link to="/home" class="button">Login</Link>
                </form>
            </div>
        )
    }
}
