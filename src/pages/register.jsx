import React, { useState } from 'react';
import registerImg from "../assets/register.png"
import "./componenets/style.css";
import { useNavigate } from 'react-router-dom';
function Register() {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    async function signUp() {
        let item = { firstname, lastname, email, password }
        console.log("***** THIS IS ITEM ******" + { item })
        if (firstname !== '' && lastname !== '' && email !== '' && password !== '') {
            navigate('/home');
            let result = await fetch("http://localhost:8080/test/hello/save",
                {
                    method: 'POST',
                    body: JSON.stringify(item),
                    headers: {
                        "Content-Type": 'application/json',
                        "Accept": 'application/json'
                    }
                })
            result = await result.json()
            console.log("result", result);
        }
    }
    return (
        <div>
            <img src={registerImg} alt="" />
            <form >
                <input type='firstname' name='Firstname' value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder='enter your first name...' required />
                <input type='lastname' name='Lastname' value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder='enter your last name...' required />
                <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email...' required />
                <input type='password' name='pwd' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password...' required />
                <button onClick={signUp} className="btn btn primary"> Register </button>
            </form>
        </div>
    )
}
export default Register;
