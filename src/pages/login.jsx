import React, { useState } from 'react'
import loginImg from "../assets/login.png"
import { useNavigate } from 'react-router-dom'
import "./componenets/style.css"
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function Log() {
        let user = { email }
        if (email !== '' && password !== '') {
            let result = await fetch("http://localhost:8080/test/hello/validateEmail",
                {
                    method: 'POST',
                    body: JSON.stringify(user),
                    headers: {
                        "Content-Type": 'application/json',
                        "Accept": 'application/json'
                    }
                })
            result = await result.json()
            if (result.message === "email already exists") {
                navigate('/home');
            }
            else {
                alert("Invalid credentials");
            }
        }
    }
    return (
        <div>
            <img src={loginImg} alt="" />
            <form>
                <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} placeholder='email...' required />
                <input type='password' name='pwd' onChange={(e) => setPassword(e.target.value)} placeholder='password...' required />
                <button onClick={Log} className="btn btn primary" >Login</button>
            </form>
        </div>
    )
}
export default Login;