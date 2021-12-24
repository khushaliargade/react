//import {Component} from 'react'
import React, { useState, useEffect } from 'react'
//import {Button,Card} from 'react-bootstrap'
import { DataGrid } from '@material-ui/data-grid'
//import axios from 'axios'


const DeleteEmp =(id) =>{
  console.log(id)
  fetch("http://localhost:8083/test/hello/delete/"+id)
  console.log("**deleted**");
};

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
          <button onClick={DeleteEmp(params)}>Delete</button>
        );
      }}
    
    
]
const UserTable = () => {
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        fetch("http://localhost:8083/test/hello/getusers")
            .then((data) => data.json())
            .then((data) => setTableData(data))
          })
        //}      
  
//  const DeleteEmp =(id) =>{
//   const[message,updateMassage]=useState("")
//   useEffect(() => {
//     fetch("http://localhost:8083/test/hello/delete/"+id)
//         .then((data) => data.json())
//         .then((data) => updateMassage(data))
//       })
        
//     }

                    
  

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

