import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'firstname', headerName: 'First Name' },
    { field: 'lastname', headerName: 'Last Name' },
    { field: 'email', headerName: 'Email' },
    { field: 'password', headerName: 'Password' },
]
const UserTable = () => {
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/test/hello/getusers")
            .then((data) => data.json())
            .then((data) => setTableData(data))
    })
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
