import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles } from "@material-ui/core"
import React, { useState } from 'react'
import { updateUser, getUsersById } from "../../service/api"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"



const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const initialValues = { firstname: '',  lastname: '', email: '', password: '' }

const UpdateUser = () => {
    const [user, setUser] = useState(initialValues);
    const { firstname, lastname, email, password } = user;
    const { id } = useParams();
    const classes = useStyle();

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        const response = await getUsersById(id);
        setUser(response.data);
    }

    // const updateUserData = async (id) => {
    //     const response = await updateUser(id,user);
    //     setUser(response.data);
    // }
    
    const updateUserData = async(id) => {
        const url = 'http://localhost:8080/test/hello/update/'+{id};
        return  await axios.put(url);
    }



    const onChange = (e) => {
        //console.log(e.target.value)
        setUser({ ...user, [e.target.firstname]: e.target.value })
    }


//    const onChange = async (event) => {
//         if (event.target) {
//           event.preventDefault();
//           const { target: { name, value }, } = event;
//           console.log('firstname ', firstname);
//           this.setState({
//             user: {
//               ...this.state.user,
//               [firstname]: value,
//             },
//           });
//         }

    return (
        <FormGroup className={classes.container}>
            {/* <TypoGraphy>Update User</TypoGraphy> */}
            <FormControl>
                <InputLabel>FirstName</InputLabel>
                <Input  onChange={(e) => onChange(e)} firstname='firstname'  value={id}/>
            </FormControl>
            <FormControl>
                <InputLabel>LastName</InputLabel>
                <Input  onChange={(e) => onChange(e)} lastname='lastname' value={lastname} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input  onChange={(e) => onChange(e)} email='email'  value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input  onChange={(e) =>onChange(e)} password='password' value={password} />
            </FormControl>
            <Button variant="contained" onClick={() => updateUserData()} color="primary">Update</Button>

        </FormGroup>
    )
}

export default UpdateUser;