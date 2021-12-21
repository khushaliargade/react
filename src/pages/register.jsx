import React from 'react';
import registerImg from "../assets/register.png"
import "./componenets/style.css"
import { Link } from "react-router-dom";
export class Register extends React.Component {
    render() {
        return (
            <div>
                <img src={registerImg} alt="" />
                <form >
                    <input type='email' name='email' placeholder='email...' required /><tr/>
                    <input type='password' name='pwd' placeholder='password...' required /><tr/>
                    <input type='password' name='pwd' placeholder='retype password...' required /><tr/>
                    <Link to="/home" class="button">Register</Link>
                </form>
            </div>
        )
    }
}