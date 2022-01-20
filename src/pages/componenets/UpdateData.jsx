// import React, { useState } from 'react'
// import { useEffect } from 'react';
// import { updateUserData,updateUser } from "../../service/api"

// function UpdateData(id) {
//     const [users, setUsers] = useState([])
//     console.warn("props",id)

//         const updateUserData = async () => {
//         const response= await updateUser(id,users);
//         console.log(response);
//         // const response = await updateUser(id,user);
//         // console.log(response);
//     }
   
//     return ( 
//         <div>
//             <h1>Update Data</h1>
//             <input type="text" defaultValue={users.firstname}/><br/><br/>
//             <input type="text" defaultValue={users.lastname}/><br/><br/>
//             <input type="text" defaultValue={users.email}/><br/><br/>
//             <input type="text" defaultValue={users.password}/><br/><br/>
//             <button onClick={updateUserData}>Update</button>
//         </div>
//     );


// }

// export default UpdateData;
