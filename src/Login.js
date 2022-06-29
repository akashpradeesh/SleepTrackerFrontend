import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SignUp from './SignUp';
// import {Routes} from 'react-router-dom';
// import SleepTrack from './SleepTrack';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Cookies from 'js-cookie';





export default function Login() {
  const [open, setOpen] = React.useState(false);
  const [detail,setDetail] = React.useState({username:"",password:""});
  const [database,setDatabase] =React.useState();
  const Form =React.useRef(null);
  const [alerts,setAlerts]= React.useState(false);


  let navigate = useNavigate();
  React.useEffect(()=>{axios.get(`/SignUp/Signup`).then((response)=>{
    setDatabase(response.data)
  })
         
  },[]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAlerts(false);
    
  };
  const handleClick =()=>{
    console.log("hi")
    let status = false;
    
    if (status === false){
      for (let i in database){
      if((detail.username === database[i].username)&& (detail.password === database[i].password)){
        let str = detail.username;
        Cookies.set('user',str.slice(0,-10))
        setOpen(false)
        navigate('/Login')
        status = true;
        break;
      }else{
    
      }}if (status === false){
        setAlerts(true);
      }

    
    
    }
    

  }
  const handleUserName=(e)=>{
      setAlerts(false);
      const {name,value} = e.target
      const newData = {...detail}
      newData[name]= value
      setDetail(newData)
      console.log(detail);
  }

  return (
    <div>
      {/* <ValidatorForm> */}
     
      <Button variant="outlined" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
      <ValidatorForm
      ref = {Form}
      onSubmit={handleClick}
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          {/* <TextValidator
            autoFocus
            margin="dense"
            name="username"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            
            variant="standard"
            onChange={handleUserName}
            validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
          /> */}
          
         
      
          {alerts===true ?(<Alert severity="warning" >Username or Password is incorrect </Alert>):null}
      {/* <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
      <Alert severity="error">This is an error alert — check it out!</Alert> */}
          <TextValidator
                    label="Email"
                    onChange={handleUserName}
                    name="username"
                    margin="dense"
                    fullWidth
                    // required
                    value={detail.username}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
        </DialogContent>
        <DialogContent>
          <TextValidator
            autoFocus
            margin="dense"
            name='password'
            id="pswd"
            // required
            label="Password"
            type="password"
            value={detail.password}
            fullWidth
            // variant="standard"
            onChange={handleUserName}
            validators={['required']}
                    errorMessages={['this field is required']}
          />
          
          
        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit"> Login</Button>
        </DialogActions>
        <DialogTitle> Don't have an Account?
        <DialogContent><SignUp/></DialogContent>
        </DialogTitle>  
        </ValidatorForm>
      </Dialog>
      {/* </ValidatorForm> */}
</div>
  );
}
