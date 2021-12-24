//import {Component} from 'react'
import React, { useState, useEffect } from 'react'
//import {Button,Card} from 'react-bootstrap'
import { DataGrid } from '@material-ui/data-grid'
import axios from 'axios'
import deleteEmp from './delete';

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
            variant="contained"
          
            onClick={<deleteEmp/>}
          >
            Delete
          </button>
        );
      }}
    //{ field:'action',headerName:'Action'}
    
]
const UserTable = () => {
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        fetch("http://localhost:8083/test/hello/getusers")
            .then((data) => data.json())
            .then((data) => setTableData(data))
          })
            
//   const[message,updateMassage]=useState("")
// const deleteEmp =(id) =>{
// axios.delete("http://localhost:8083/test/hello/delete/"+id)
// .then(response=>{
//     updateMassage("delete successfully..!!!");
// })
// }
            
  
// for delete data from table

// const[message,updateMassage]=useState("")
// const deleteEmp =(id) =>{
// axios.delete("http://localhost:8083/test/hello/delete/"+id)
// .then(response=>{
//     updateMassage("delete successfully..!!!");
// })
// }





    return (
        <div style={{ height: 700, width: '100%' }}>
            <h2>This is user table</h2>
            <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={10}
                checkboxSelection />
        </div>
      )
    } 

export default UserTable

