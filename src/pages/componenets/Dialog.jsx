 import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

function FormDialog({ open, handleClose, data, onChange, handleFormSubmit }) {
  const  { firstname, lastname, email, password }=data 
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose} 
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">

        {<DialogTitle id="alert-dialog-title">Update User</DialogTitle>
        }
        <DialogContent>
          <form>
            <TextField id="firstname" value={firstname} onChange={e => onChange(e)} placeholder='enter firstname' label='FirstName' variant='outlined' margin='dense' fullWidth />
            <TextField id="lastname" value={lastname} onChange={e => onChange(e)} placeholder='enter lastname' label='LastName' variant='outlined' margin='dense' fullWidth />
            <TextField id="email" value={email} onChange={e => onChange(e)} placeholder='enter email' label='Email' variant='outlined' margin='dense' fullWidth />
            <TextField id="password" value={password} onChange={e => onChange(e)} placeholder='enter password' label='Password' variant='outlined' margin='dense' fullWidth />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='outlined' >Cancel</Button>
          <Button onClick={() => handleFormSubmit()} variant='outlined' >Update</Button>
        </DialogActions>
      </Dialog>
    </div> 
  );
}
export default FormDialog;