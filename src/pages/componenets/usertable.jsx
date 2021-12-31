import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
<<<<<<< Updated upstream
=======
import FormDialog from './dialog';
import { Button } from '@material-ui/core';


const  HandleDelete=(id) =>{
  let url='http://localhost:8080/test/hello/delete/'+id;
  fetch(url)
  .then(resp=>resp.json())
  .then(resp=>UserTable())
}
>>>>>>> Stashed changes
const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'firstname', headerName: 'First Name' },
    { field: 'lastname', headerName: 'Last Name' },
    { field: 'email', headerName: 'Email' },
    { field: 'password', headerName: 'Password' },
<<<<<<< Updated upstream
=======
    {field:'ActionFORDElete',
    headerName:'DeleteAction',
    renderCell: (params) => {
       return (
        <button 
        color="secondary"
        variant="contained"
        onClick={()=>HandleDelete(params.id)}
        >Delete</button>
        
       );
       }
    },{field:'Action',
    headerName:'UpdateAction',
    renderCell: (params) => {
       return (
        <button 
        color="secondary"
        variant="contained"
        //onClick={()=>HandleUpdate(params.id)}
        > Update</button>
        
       );
       }
    }
>>>>>>> Stashed changes
]

const UserTable = () => {
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/test/hello/getusers")
            .then((data) => data.json())
<<<<<<< Updated upstream
            .then((data) => setTableData(data))
    })
    return (
=======
            .then((data) => setTableData(data))}
          })
          const [open, setOpen] = React.useState(true);
          const [formData ,setFormData] = useState({firstname:"" ,lastname:"", email:"",password:""})
          const handleClickOpen = () => {
         setOpen(true);
   };

  const handleClose = () => {
    setOpen(false);
  };
return (
>>>>>>> Stashed changes
        <div style={{ height: 700, width: '100%' }}>
            <h2>This is user table</h2>
            <Button onClick = {handleClickOpen}>Add user</Button>
            <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={10}
<<<<<<< Updated upstream
                checkboxSelection />
=======
                checkboxSelection /> ,  
                <FormDialog open={open} handleClose={handleClose} data={formData}/>
                
>>>>>>> Stashed changes
        </div>
    )
}
export default UserTable
