import React from "react";

//import "./componenets/style.css"
//import React from "react";
//import "./componenets/style.css"
import { Link } from "react-router-dom";
const update =()=> {


  const HandleUpdate=()=>{
    let url='http://localhost:8080/test/hello/update';
    fetch(url)
    .then(resp=>resp.json())
    .then()
  }
 {
        return (
            <div>
               
                <form >
                <input type='firstname' name='Firstname' value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder='enter your first name...' required />
                <input type='lastname' name='Lastname' value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder='enter your last name...' required />
                <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email...' required />
                <input type='password' name='pwd' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password...' required />
                 <button onClick={HandleDelete()} className="btn btn primary"> UpdateUser</button> 
            </form>
            </div>
        )
    }
}


