import {useNavigate} from 'react-router-dom';
import {React,useEffect,useState} from 'react';
import Button from '@mui/material/Button';
import NewEntry from './NewEntry';
import axios from 'axios';
import TableData from './TableData';
import Graph from './Graph';
import Cookies from 'js-cookie';



export default function SleepTrack(){
    let navigate = useNavigate();
    const user = Cookies.get('user');
    // const [datas,setDatas] = useState();
  
    // useEffect(()=>{axios.get(`details`).then(({data})=>{
    //     setDatas(data)
    //     console.log(datas);
    // })},[]);
    const [datas,setDatas] = useState([]);
    
    useEffect(()=>{axios.get(`Table/details`,{params:{name:user}}).then(({data})=>{
        setDatas(data);
      
    })},[datas]);
    const dataUpdate = (userDetail)=>{
        setDatas(userDetail)
    }

    const handleLogOut = ()=>{
        navigate('/');
    }


    return(
        <div><div>
            <h1><center>Welcome {user}</center></h1>
            <p></p>

            <NewEntry user = {user} dataUpdate={dataUpdate}/>
        <Button variant='outlined' onClick={handleLogOut} style={{color:"red"}}>Logout</Button></div>
        <p></p>
        <div><Graph datas={datas}/></div>
        <p></p>
        <div><TableData datas={datas} /></div>
      
        
        </div>
    )
}