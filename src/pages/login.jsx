import React, { useState , useEffect } from 'react';
import loginImg from "../assets/login.png"
import "./componenets/style.css";
//import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
//import { useEffect } from 'react';

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //const navigate = useNavigate();
    const history = useHistory();
    useEffect (() => {
        if (localStorage.getItem('user-info')){
            history.push("/home")
        }
        else{
            alert("enter correct email")
        }
        
    },[])

    async function Log() {

        let item = { email, password }
        console.log(email,password)

       // if (email==item ) {
            //navigate('/home');
            let result = await fetch("http://localhost:8080/test/hello/validateEmail",
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
       // }
    }
       
    return (
        <div>
            <img src={loginImg} alt="" />
            <form>
                <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} placeholder='email...' required />
                <input type='password' name='pwd' onChange={(e) => setPassword(e.target.value)} placeholder='password...' required />
                <button onClick={Log} className="btn btn primary">Login</button>
            </form>
        </div>
    )
}
 
export default Login;

