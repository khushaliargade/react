
import React, { useState, useEffect } from 'react'
//import {Button,Card} from 'react-bootstrap'
import { DataGrid } from '@material-ui/data-grid'
import axios from 'axios'


const[message,updateMassage]=useState("")
const deleteEmp =(id) =>{
axios.delete("http://localhost:8083/test/hello/delete/"+id)
.then(response=>{
    updateMassage("delete successfully..!!!");
})
}
export default  deleteEmp 