import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../service/api"
import { TableCell, TableRow, Table, TableBody, TableHead, makeStyles, Button } from "@material-ui/core"
import { Link } from 'react-router-dom'
import { getUsersById } from "../../service/api"

const useStyle = makeStyles({
  table: {
    width: '90%'
  },
  thead: {
    '& > *': {
      background: '#000000',
      color: '#FFFFFF',
      fontsize: '20'
    }
  }
})


const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyle();

  useEffect(() => {
    loadUserData();
            }, []);
        
   
    const loadUserData = async (id) => {
        const response = await getUsersById(id);
        setUsers(...response.users);
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }


  useEffect(() => {
    getAllUsers();
  }, [])


  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data)

  }

  //for delete data
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  }

  return (
    <div>
      <h2>This is user table</h2>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>FirstName</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users.map(user => (
              <TableRow>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.firstname}</TableCell>
                <TableCell>{user.lastname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.password}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary"  component={Link} to={'/update/'+user.id} onClick={loadUserData}>Update</Button>
                  </TableCell>
                  <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)} >Delete</Button>
              
                </TableCell>
              </TableRow>
            )
            )
          }
        </TableBody>
      </Table>


    </div>
  );
}


export default UserTable;