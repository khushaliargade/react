import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
export default function FormDialog({ open, handleClose, data }) {
  const { FirstName, LastName, Email, Password } = data

  return (
    <div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">"Create New User"</DialogTitle>
        <DialogContent>
          <form>
            <TextField id="First Name" value={FirstName} placeholder="Enter First name" label="First Name" variant="filled" margin="dense" fullWidth />
            <TextField id="Last Name" value={LastName} placeholder="EnterLast name" label="Last Name" variant="filled" margin="dense" fullWidth />
            <TextField id="Email" value={Email} placeholder="Enter Email" label="Email" variant="filled" margin="dense" fullWidth />
            <TextField id="Paswword" value={Password} placeholder="Enter Password" label="Password" variant="filled" margin="dense" fullWidth />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Cancel
          </Button>
          <Button color="secondary" variant="outlined" >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
