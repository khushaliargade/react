// import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles } from "@material-ui/core"
// import React, { useState } from 'react'
// import { updateUser, getUsersById } from "../../service/api"
// import { useParams } from "react-router-dom"
// import { useEffect } from "react"

// const useStyle = makeStyles({
//     container: {
//         width: '50%',
//         margin: '5% 0 0 25%',
//         '& > *': {
//             marginTop: 20
//         }
//     }
// })

// const initialValues = { firstName: '',  lastName: '', email: '', password: '' }

//  const UpdateUser = () => {

//     const [user, setUser] = useState(initialValues);
//     const[firstName,setFirstName]=useState("");
//     const[lastName,setLastName]=useState("");
//     const[email,setEmail]=useState("");
//     const[password,setPassword]=useState("");

//     const { id } = useParams();
//     const classes = useStyle();

//     useEffect(() => {
//         loadUserData();
//     }, []);

//     const loadUserData = async () => {
//         const response = await getUsersById(id);
//         setUser(response.data);
//     }

//     const updateUserData = async () => {
//         const response = await updateUser(id,user);
//         console.log(response);
//     }

//     // const updateUserData = async(sid) => {
//     //     const url = 'http://localhost:8080/test/hello/update/'+sid;
//     //     return  await axios.put(url);
//     // }

//     const onChange = (e) => {
//         setUser({ ...user, [e.target.firstname]: e.target.value })
//         }

//         return (
//             <FormGroup className={classes.container}>
//                 {/* <TypoGraphy>Update User</TypoGraphy> */}
//                 <FormControl>
//                     <InputLabel>FirstName</InputLabel>
//                     <Input  onChange={(e) => onChange(e)} firstname='firstname'  value={firstName}/>
//                 </FormControl>
//                 <FormControl>
//                     <InputLabel>LastName</InputLabel>
//                     <Input  onChange={(e) => onChange(e)} lastname='lastname' value={lastName} />
//                 </FormControl>
//                 <FormControl>
//                     <InputLabel>Email</InputLabel>
//                     <Input  onChange={(e) => onChange( e)} email='email'  value={email}/>
//                 </FormControl>
//                 <FormControl>
//                     <InputLabel>Password</InputLabel>
//                     <Input  onChange={(e) =>onChange(e)} password='password' value={password} />
//                 </FormControl>
//                 <Button variant="contained" onClick={() => updateUserData()} color="primary">Update data {id}</Button>

//             </FormGroup>
//         )
//      }

//   export default UpdateUser;
