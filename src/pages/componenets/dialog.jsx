import   React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextField} from '@material-ui/core';

export default function FormDialog({open , handleClose ,data}) {
  const {id,firstname , lastname,email,password}=data

  return (
    <div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Update User</DialogTitle>
        
        
        <DialogContent>
          <form>
            <TextField id ="firstname" value={firstname} placeholder='enter firstname' label ='FirstName' variant='outlined' margin='dense' fullWidth/>
            <TextField id ="lastname" value={lastname}  placeholder='enter lastname' label ='LastName'   variant='outlined' margin='dense' fullWidth/>
            <TextField id ="email" value={email}  placeholder='enter email' label ='Email'  variant='outlined' margin='dense'  fullWidth/>
            <TextField id ="password" value={password}  placeholder='enter password' label ='Password'  variant='outlined' margin='dense' fullWidth/>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='outlined' >Cancel</Button>
          <Button onClick={handleClose} variant='outlined' >Update</Button>

         
        </DialogActions>
      </Dialog>
    </div>
  );
}
