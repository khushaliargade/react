import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import FormDialog from './Dialog'
import Button from '@material-ui/core/Button';






const UserTable = () => {
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    if (tableData == '') {
      fetch("http://localhost:8080/test/hello/getusers")

        .then((data) => data.json())
        .then((data) => setTableData(data))
    }

  })

  const [open, setOpen] = React.useState(true);
  const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", password: "" })
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  //update
  const HandleUpdate = (oldData) => {
    console.log(oldData)
    handleClickOpen()


  }
//delelte
const HandleDelete = (id) => {
  let url = 'http://localhost:8080/test/hello/delete/' + id;
  fetch(url)
    .then(resp => resp.json())
    .then(resp => UserTable())
}

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'firstname', headerName: 'First Name' },
    { field: 'lastname', headerName: 'Last Name' },
    { field: 'email', headerName: 'Email' },
    { field: 'password', headerName: 'Password' },
    {
      field: 'Action',
      headerName: 'DeleteAction',
      renderCell: (params) => {
        return (

          <button style={{ backgroundcolor: "red", color: "black" }}

            onClick={() => HandleDelete(params.id)}
          >Delete</button>

        );
      }
    },

    {
      field: 'Action2',
      headerName: 'Update',
      renderCell: (params) => {
        return (
          <button onClick={() => HandleUpdate(params.data)}>Update</button>

        );
      }
    }

  ]




  return (

    <div style={{ height: 700, width: '100%' }}>
      <h2>This is user table</h2>
      <Button onClick={handleClickOpen}>Add User</Button>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={10}
        checkboxSelection />
      <FormDialog open={open} handleClose={handleClose} data={formData} />

    </div>


  )
}


export default UserTable
