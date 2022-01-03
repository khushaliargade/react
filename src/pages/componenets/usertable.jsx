import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { Link } from "react-router-dom";
import FormDialog from './dialog'
import Button from '@material-ui/core/Button';
const UserTable = () => {
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    if(tableData=='')
    {
      fetch("http://localhost:8080/test/hello/getusers")
    .then((data) => data.json())
          .then((data) => setTableData(data))}
        })
const  HandleDelete=(id) =>{
  let url='http://localhost:8080/test/hello/delete/'+id;
  fetch(url)
  .then(resp=>resp.json())
  .then(resp=>UserTable())
}
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
const [firstname, setID] = useState("")
const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'firstname', headerName: 'First Name' },
    { field: 'lastname', headerName: 'Last Name' },
    { field: 'email', headerName: 'Email' },
    { field: 'password', headerName: 'Password' },
    {field:'Action',
    headerName:'DeleteAction',
    renderCell: (params) => {
       return (
        <button 
        color= "primary"
        variant="contained"
        onClick={()=>HandleDelete(params.id)}
        >Delete</button>
 );
       }
    },
    {field:'ActionUpdate',
    headerName:'UpdateAction',
    renderCell: (params) => {
       return (
        <button 
        color= "primary"
        variant="contained"
      onClick={ HandleUpdate(params.data)}
         >Update</button>
      
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

