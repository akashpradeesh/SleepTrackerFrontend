import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Icon from '@mui/material/Icon';
import axios from 'axios';


export default function NewEntry({user,dataUpdate}) {
  const [open, setOpen] = React.useState(false);
  const [data,setData]= React.useState({date:'',slept:'',wake:''});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDateChange=(e)=>{
    const {name,value} =e.target;
    const newdata = {...data};
    newdata[name] = value;
    setData(newdata);
    console.log(data);
  }

  const handleOnSubmit=()=>{
    setOpen(false);
    const temp = {name: user,datas:data }
    axios.post(`Table/datas`,temp).then((response)=>{
          dataUpdate(response.data)
    });
    
    }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}><Icon>add_circle</Icon>New Entry
      </Button><p></p>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Entry</DialogTitle>
        <DialogContent><label>Date?
        <TextField
            autoFocus
            margin="dense"
            name='date'
            id="name"
            type="date"
            defaultValue="2022-06-22"
            fullWidth
            variant="standard"
            onChange={handleDateChange}
          /></label>
        </DialogContent>
        <DialogContent>
            <label> Slept On?
        <TextField
            autoFocus
            margin="dense"
            name='slept'
            type="time"
            fullWidth
            variant="standard"
            onChange={handleDateChange}
          /></label>
        </DialogContent>
        <DialogContent>
        <label>Wake Up Time?
        <TextField
            autoFocus
            margin="dense"
            name='wake'

            type="time"
            fullWidth
            variant="standard"
            onChange={handleDateChange}
          /></label>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOnSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
