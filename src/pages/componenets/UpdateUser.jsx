import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles } from "@material-ui/core"
import React, { useState } from 'react'
import { updateUser, getUsersById } from "../../service/api"
import { useParams } from "react-router-dom"
import { useEffect } from "react"



const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const initialValues = { firstname: "", lastname: "", email: "", password: "" }

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

    const updateUserData = async () => {
        const response = await updateUser(id);
        setUser(response.data);
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.firstname]: e.target.value })
    }

    // const updateUsersDetails = async() => {
    //     await updateUsers(user);
    // }

    return (
        <FormGroup className={classes.container}>
            <FormControl>
                <InputLabel>FirstName</InputLabel>
                <Input value={firstname} onChange={(e) => onChange(e)} firstname='firstname' />
            </FormControl>
            <FormControl>
                <InputLabel>LastName</InputLabel>
                <Input value={lastname} onChange={(e) => onChange(e)} lastname='lastname' />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input value={email} onChange={(e) => onChange(e)} email='email' />
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input value={password} onChange={(e) => onChange(e)} password='password' />
            </FormControl>
            <Button variant="contained" onClick={() => updateUserData()} color="primary">Update</Button>

        </FormGroup>
    );
}

export default UpdateUser;