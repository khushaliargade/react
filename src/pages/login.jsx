import React from "react";
import { useState} from 'react'; 
import axios from 'axios';
import loginImg from "../assets/login.png"
import "./componenets/style.css"
import { Link } from "react-router-dom";
// export class Login extends React.Component {
    const Login = (props) => {

        const [email,setEmail]=useState('');
        const [password,setPassword]=useState('');
        const [error,setError]=useState(null);
        const [loading,setLoadding]=useState(false);
        
       //const handlelogin = () => {
           setError(null);
           setLoadding(true);
           axios.post("http://localhost:8086/test/hello/validateEmail/svgvxgds@gmail.com",{
               email:email,
               password:password
           }).then(response =>{
               setLoadding(false);
               console.log('response >>>',response);
           }).catch(error =>{
               setLoadding(false);
            console.error('error >>>',error);

           });

       //}
   // render() {
        return (
            <div>
                <img src={loginImg} alt="" />
                <form>
                    <input type='email' name='email' placeholder='email...' required />
                    onChange={(e)=>setEmail(e.target.value)} 
                    <input type='password' name='pwd' placeholder='password...' required />
                    //onChange={(e)=>setPassword(e.target.value)}
                    {error && <div classname="error">{error}</div>}
                    <Link to="/home" class="button">login</Link>
                </form>
            </div>
        )
        
        }
//export default Login;

