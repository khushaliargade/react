import React, { useState } from 'react';
//import Register from "./componenets/register"
import registerImg from "../assets/register.png"
import "./componenets/style.css"
import { Link } from "react-router-dom";
//function  Register() {


const Register = () => {

    const [user, setUser] = useState({

        firstname: "", lastname: "", email: "", password: "", password: ""
    });
    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }
    return (

        <div>
            <img src={registerImg} alt="" />
            <form >
                <input type='firstname' name='Firstname'  onChange={handleInputs} placeholder='enter your first name...' required /><tr />
                <input type='lastname' name='Lastname' value={user.lastname} onChange={handleInputs} placeholder='enter your last name...' required /><tr />
                <input type='email' name='email' value={user.email} onChange={handleInputs} placeholder='email...' required /><tr />
                <input type='password' name='pwd' value={user.password} onChange={handleInputs} placeholder='password...' required /><tr />
                <input type='password' name='retypepwd' value={user.password} onChange={handleInputs} placeholder='retype password...' required /><tr />
                <Link to="/home" class="button">Register</Link>
            </form>
        </div>

    )

    }
export default Register;
    