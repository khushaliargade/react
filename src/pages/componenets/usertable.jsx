import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import FormDialog from './dialog'
import Button from '@material-ui/core/Button';

const initialValue = { firstname: "", lastname: "", email: "", password: "" }
const UserTable = () => {
  const [tableData, setTableData] = useState([])
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialValue)

  //for update button
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  //for cancel button
  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
  };

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
            onClick={() => HandleDelete(params.id)}>Delete</button>
        );
      }
    },
    {
      field: 'Action2', headerName: 'UpdateAction',
      renderCell: (params) =>
        <button variant="outlined" color="primary" onClick={() => handleGetUser(params.data)}>Update</button>

    }
  ]
  
  //for getting all users in table
  useEffect(() => {
     if (tableData ==='') {
    fetch("http://localhost:8080/test/hello/getusers")
      .then((data) => data.json())
      .then((data) => setTableData(data))
    }
  })

  const onChange = (e) => {
    const { value, id } = e.target
    setFormData({ ...formData, [id]: value })
  }

  //update
  // const handleUpdate=(oldData)=>{
  //  setFormData(oldData)
  //   handleClickOpen()
  // }
  
  //for loading previous user on onclick of update button
  const handleGetUser = (id) => {
    let url = 'http://localhost:8080/test/hello/getusers/' + id;
    fetch(url)
      .then(resp => resp.json())
      .then(resp => UserTable())
  }

  //delelte
  const HandleDelete = (id) => {
    let url = 'http://localhost:8080/test/hello/delete/' + id;
    fetch(url)
      .then(resp => resp.json())
      .then(resp => UserTable())
  }

   //for update
  const handleFormSubmit = (id) => {
    let url = 'http://localhost:8080/test/hello/update' + id;
    //if (formData.id) {
      fetch(url + '/${id}',
        {
          method: "PUT", body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }).then(resp => resp.json()).then(resp => {
          handleClose(setFormData(initialValue))
          console.log(resp)
        })
    //}

    // else {
    //   fetch('http://localhost:8080/test/hello/save',
    //     {
    //       method: "POST", body: JSON.stringify(formData),
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //       }
    //     }).then(resp => resp.json()).then(resp => {
    //       handleClose()
    //       console.log(resp)
    //     })
    // }
  }


  return (
    <div style={{ height: 700, width: '100%' }}>
      <h2>This is user table</h2>
      <Button onClick={handleClickOpen}>Add User</Button>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={10}
        checkboxSelection />
      <FormDialog open={open} handleClose={handleClose} data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
    </div>
  )
}
export default UserTable;