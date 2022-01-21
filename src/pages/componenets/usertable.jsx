import React, { useEffect, useState } from "react";
import { getUsers, deleteUser, updateUser } from "../../service/api";
import {
  TableContainer,
  TableCell,
  TableRow,
  Table,
  TableBody,
  TableHead,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyle = makeStyles({
  table: {
    width: "80%",
  },
  thead: {
    "& > *": {
      background: "#000000",
      color: "#FFFFFF",
      fontsize: "18",
    },
  },
});

const UserTable = () => {
  const [users, setUsers] = useState([
    { sid: "", firstname: "", lastname: "", email: "", password: "" },
  ]);
  const [isEdit, setEdit] = useState(false);
  const classes = useStyle();

  //For getting users
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
    console.log("this is" + setUsers);
  };

  //for delete data
  const deleteUserData = async (id) => {
    await deleteUser(id);
  };

  //for update

  const handleEdit = (i) => {
    // If edit mode is true setEdit will
    // set it to false and vice versa
    setEdit(!isEdit);
  };

  const handleInputChange = (e, i) => {
    const { name, value } = e.target;
    const list = [...users];
    list[i][name] = value;
    setUsers(list);
    console.log(users + list + setUsers);
  };

  const updateUserData = async (sid) => {
    let updatedUserData = users.find((item) => item.sid === sid);
    const response = await updateUser(sid, updatedUserData);
    setEdit(!isEdit);
    console.log("THIS IS REQUEST" + response);
  };

  return (
    <div style={{ marginLeft: "40px" }}>
      <h3>Users List</h3>
      <TableContainer>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow className={classes.thead}>
              <TableCell>Id</TableCell>
              <TableCell>FirstName</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, i) => {
              return (
                <TableRow key={i}>
                  {isEdit ? (
                    <React.Fragment>
                      <TableCell>
                        <input
                          disabled
                          value={user.sid}
                          name="sid"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          value={user.firstname}
                          name="firstname"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          value={user.lastname}
                          name="lastname"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          value={user.email}
                          name="email"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          value={user.password}
                          name="password"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => updateUserData(user.sid)}
                        >
                          Save
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => deleteUserData(user.sid)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <TableCell>{user.sid}</TableCell>
                      <TableCell>{user.firstname}</TableCell>
                      <TableCell>{user.lastname}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.password}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleEdit}
                        >
                          Update
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => deleteUserData(user.sid)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </React.Fragment>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserTable;
