import { useEffect , useState} from "react";
import { getUsers } from "../../service/api"
import { TableCell,TableRow,Table,TableBody,TableHead , makeStyles} from  "@material-ui/core"
import "./style.css"

const useStyle=makeStyles({
  table: {
    width:'90%'
  },
  thead:{
    '& > *':{
      background:'#000000',
      color:'#FFFFFF',
      fontsize:'20'
    }
  }
})


const UserTable = () => {
  const[users,setUsers]=useState([]);
  const classes =useStyle();

  useEffect(() =>{
   getAllUsers();
  },[])
  

  const getAllUsers = async ()=>{
  const response = await  getUsers();
  console.log(response.data);
  setUsers(response.data)

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
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users.map(user =>(
              <TableRow>
                <TableCell>{user.sid}</TableCell>
                <TableCell>{user.firstname}</TableCell>
                <TableCell>{user.lastname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.password}</TableCell>
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