import React from "react";


import { Link } from "react-router-dom";


const Update =()=> {
  const [id,s setID] = useState("")
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const HandleUpdate=(id)=>{
    let url='http://localhost:8080/test/hello/update/';
    fetch(url+id)
    .then(resp=>resp.json())
    .then()
  }
 {
        return (
            <div>
               
                <form >
                <input type='id' name='id' value={id} onChange={(e) => setID(e.target.value)} placeholder='enter your id....' required />
                <input type='firstname' name='Firstname' value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder='enter your first name...' required />
                <input type='lastname' name='Lastname' value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder='enter your last name...' required />
                <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email...' required />
                <input type='password' name='pwd' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password...' required />
                 <button onClick={HandleUpdate(id)} className="btn btn primary"> UpdateUser</button> 
            </form>
            </div>
        )
    }
}
export default Update

