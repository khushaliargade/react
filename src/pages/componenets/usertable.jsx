import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
 function deleteUser(id)
 {
   //alert(id);
   fetch('http://localhost:8080/test/hello/delete/${id}', {
     method:"Delete"
   }).then((result)=>{
     result.json().then((resp)=>{
       console.warn(resp)
       console.log(id)
     })
   })
 }

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
        color="primary"
        variant="contained"
        onClick={console.log(params)}
        >Delete</button>
        
       );
       }
    }
    
    
]
const UserTable = () => {
    const [tableData, setTableData] = useState([])
    useEffect(() => {
      if(tableData=='')
      {
        fetch("http://localhost:8080/test/hello/getusers")
      
            .then((data) => data.json())
            .then((data) => setTableData(data))
      }
          })
    


                    
  

return (
        <div style={{ height: 700, width: '100%' }}>
            <h2>This is user table</h2>
            <DataGrid
                rows={tableData}
                columns={columns}
                
                pageSize={10}
                checkboxSelection /> ,  
                
        </div>
      )
    } 

export default UserTable

