import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import app from './firebase';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import {FormControl} from '@mui/material';
import { Card } from '@mui/material';

function Signup() {
    const[data,setdata]=useState({Email:"",Password:"",Confirmpassword:"",phonenumber:""})
    const{Email,Password, phonenumber}=data
    const navigate=useNavigate()

    const changehandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})

    }
    const submithandler=(e)=>{
      e.preventDefault()
      const auth = getAuth();
     
      createUserWithEmailAndPassword(auth, Email, Password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // alert("signin  is successfull")
      // Navigate("/dashboard")
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      alert("your login is sucessful")
    });
          console.log(data)
          // alert("your login is sucessful")
          navigate("/login")
    }
        
        

    
  return (
    
    <div className="signup">
      <div className='lf'>
<img src="https://cdn.dribbble.com/users/380268/screenshots/1187493/timelapse-2.gif" alt="mygiff" style={{width:'150%',height:'100%'}}/>
      </div>
      <div className='rr'>
        {/* <center > */}
    <h1 >Welcome to sign up page </h1>
    <Card style={{alignItems:'center',paddingLeft:'20%',padding:'10%'}}>
    <form onSubmit={submithandler}>
      <center>
      <label>Email</label>
      <br></br>
      {/* <TextField type="email" id="outlined-basic"  size ="small" name="Email"  label="Email"
         placeholder="**********"  onChange={changehandler} variant="outlined"/><br></br> */}
      <input type="email"  placeholder='abc.email.com' name='Email' onChange={changehandler}  /><br></br><p></p>
      <label>Password</label><br></br>
      {/* <TextField type="password" id="outlined-basic"  size ="small" name="password"  label="Password"
         placeholder="**********"  onChange={changehandler} variant="outlined"/><br></br> */}
      <input type="password"  placeholder='***********' onChange={changehandler} name='Password' /><br></br><p></p>
      {/* <label>Confirmpassword</label><br></br>
      <input type="password"  name="Confirmpassword" placeholder="********" onChange={changehandler}    /><br></br> */}
      <label>Phonenumber</label><br></br>
      <input type="phonenumber"  placeholder='1234567890' name='Phonenumber' onChange={changehandler}    /><br></br>
      {/* <p></p> */}
      {/* <TextField type="number" id="outlined-basic"  size ="small" name="phonenumber"  label="Phonenumber"
         placeholder="**********"  onChange={changehandler} variant="outlined"/>
         <br></br> */}
        

<br></br>
      <input type="submit" name="submit"></input><br></br>
      {/* <Button  style={{textTransform:'capitalize',backgroundColor:'orangered',borderRadius:'5%'}}   type="submit" name="submit" onClick={submithandler}  variant="contained">SignUp here</Button><br></br> */}
      </center>
      </form>
      {/* <Link to="/">Back to login page</Link> */}
      {/* </center> */}
      {/* <Link path="/login">BACK TO LOGIN PAGE</Link> */}
      </Card>
      </div>
    
    </div>

    
  )
}

export default Signup
