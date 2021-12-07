import React from 'react';
import registerImg from "../assets/register.png"
import "./componenets/style.css"
export class Register extends React.Component {
    render() {
        return (
            <div>
                <img src={registerImg} alt="" />
                <form onSubmit={this.handleSubmit}>
                    <input type='email' name='email' placeholder='email...' required onChange={this.handleChange} />
                    <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange} />
                    <input type='password' name='pwd' placeholder='retype password...' required onChange={this.handleChange} />
                    <button onSubmit={this.handleSubmit}>Register</button>
                </form>
            </div>
        )
    }
}