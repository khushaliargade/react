import React from "react";
import loginImg from "../assets/login.png"
import "./componenets/style.css"
export class Login extends React.Component {
    render() {
        return (
            <div>
                <img src={loginImg} alt="" />
                <form onSubmit={this.handleSubmit}>
                    <input type='email' name='email' placeholder='email...' required onChange={this.handleChange} />
                    <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange} />
                    <button onSubmit={this.handleSubmit}>Log In</button>
                </form>
            </div>
        )
    }
}
