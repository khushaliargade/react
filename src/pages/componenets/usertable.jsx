import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { Link } from "react-router-dom";

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
const HandleUpdate=()=>{
  let url='http://localhost:8080/test/hello/update';
  fetch(url)
  .then(resp=>resp.json())
  .then(resp=>UserTable())
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
    renderCell: () => {
       return (
      //   <button 
      //   color= "primary"
      //   variant="contained"
      //  onClick={()=> <Link to="/update" class="button">Login</Link>}
      //   >Update</button>
      <Link to="/update" class="button">Update</Link>
 );
       }
    }
]
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

