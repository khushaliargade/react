import React , { useState  } from 'react'
import loginImg from "../assets/login.png"
//import  { useHistory } from 'react-router-dom'
import "./componenets/style.css"

  function Login() {
      //const history = useHistory();
      //useEffect(() => {
        //  if(localStorage.getItem('user-info')) {
          //    history.push("/home")
          //}
      //},[])
    

      const [ email , setEmail] =useState("");
      const [ password , setPassword] =useState("");
       

     async function Log(email) {
           console.warn("data" ,email,password)
          let item={email,password}
          let result= await fetch('http://localhost:8080/test/hello/validateEmail/'+email,{
              method:'POST',
              headers:{
                  "Content-Type":"application/json",
                  "Accept":"application/json"
              },
              body:JSON.stringify(item)
          });
          result = await result.json()
          console.log("result", result);
          //localStorage.setItem('user-info',JSON.stringify(result));
         // history.push("/home")

      }
    
        return (
            <div>
                <img src={loginImg} alt="" />
                <form>
                    <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} placeholder='email...' required   />
                    <input type='password' name='pwd' onChange={(e) => setPassword(e.target.value)} placeholder='password...' required />
                    <button onClick={Log} className="btn btn primary">Login</button>
                </form>
            </div>
        )
    }



    export default Login;
