import { React,useState,useEffect }from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import {useNavigate} from 'react-router-dom';
import axios from 'axios';
// import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
// import Login from './Login';



function SignUp() {
    const [open, setOpen] = useState(false);
    const [detail,setDetail] = useState({username:"",password:"",confirmpswd:""})
    // let navigate = useNavigate();
    const [data,setData] = useState([]);
    // const form = React.useRef(null);

    useEffect(()=>{axios.get(`/SignUp/Signup`).then((response)=>{
      setData(response.data)
      // console.log(response.data);
    });},[data]);

    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleOnChange = (e)=>{
      const {name,value}=e.target
      const newData = {...detail}
      newData[name] = value
      setDetail(newData)
      
    }
    const handleClick=() =>{
      // console.log("Workin")
      if (detail.username && detail.password && detail.confirmpswd !== ""){
      let status = false;
      if
      (detail.password === detail.confirmpswd){
        // console.log("in if")
        
        for(let i in data){
          // console.log(data[i].username)
          if (data[i].username === detail.username){
            alert('user already exists')
            status = true
            break;
          }
        }
        if( status === false){
          axios.post(`/SignUp/detail`,detail).then();
          alert("Successfully signed up!")
          setOpen(false)
          // navigate('/Login')
          
        }
      }
      else{
        alert("password does not matches")
      }
      
    }else{
      alert("Please Fill all the required field")
    }}
    
    const handleClose = () => {
      setOpen(false);
    };
return(
<div>
{/* <ValidatorForm> */}
<Button variant="outlined" onClick={handleClickOpen}>
  SignUp
</Button>
<Dialog open={open} onClose={handleClose}>
  {/* <ValidatorForm
  ref ={form}
  onSubmit = {handleClick}
  > */}
  <DialogTitle>SignUp</DialogTitle>
  <DialogContent>
    <TextField
      autoFocus
      margin="dense"
      name='username'
      id="email"
      label="Email Address"
      type="email"
      fullWidth
      // required
      // variant="standard"
      // value = {detail.username}
      onChange={handleOnChange}
      // validators={['required', 'isEmail']}
      //               errorMessages={['this field is required', 'email is not valid']}
    />
     <TextField
      // autoFocus
      margin="dense"
      name='password'
      id="nwpswd"
      label="New Password"
      type="password"
      fullWidth
      required
      // variant="standard"
      // value={detail.password}
      onChange={handleOnChange}
      // validators={['required']}
      //               errorMessages={['this field is required']}

    />
    <TextField
      // autoFocus
      margin="dense"
      id='confirmpswd'
      name='confirmpswd'
      label="Confirm Password"
      type="password"
      fullWidth
      required
      // variant="standard"
      // value={detail.confirmpswd}
      onChange={handleOnChange}
      // validators={['required']}
      //               errorMessages={['this field is required']}

    />
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={handleClick}>Sign in </Button>
  </DialogActions>
  {/* </ValidatorForm> */}
</Dialog>
{/* </ValidatorForm> */}
</div>
)};
export default SignUp;