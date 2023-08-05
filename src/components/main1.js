import React from 'react'
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles';

function Main1() {
  return (
    <div className='main1'>
      <div className='borderbox'>
        <TextField className='textfield' id="outlined-basic" placeholder='Your email'style={{width:"70%",padding:"1%",borderRadius:'15px',height:'10%',fontSize:'14px'}}  variant="outlined" />
        {/*  */}
        {/* <ThemeProvider theme={theme}> */}
        <div className='buttn'>
       <a href="/signup"><Button style={{ borderRadius:'10px',textTransform:"capitalize" }} sx={{
        backgroundColor: 'black', 
        color: 'white', 
        '&:hover': {
          backgroundColor: 'green', 
        },
      }} variant="contained" >Signup</Button></a>  or
       <a href="/google"><Button  style={{ borderRadius:'10px',textTransform:"capitalize" ,color:"black"}} sx={{
        backgroundColor: 'white', 
        color: 'white', 
        '&:hover': {
          backgroundColor: 'orange', 
        },
      }} variant="contained" ><GoogleIcon style={{color:'purple'}}/> <span>Signup with google</span></Button></a>
       </div>
       
       </div>
       <div style={{display:'flex',alignItems:'center' ,justifyContent:'space-between'}}>
       <p >Looking to fund raise or invest in the next generation of great<br></br>
       startups? AngelList Venture can now be found at <a href="https://www.angellist.com/">AngelList.com</a></p>
       <p>Already have an account? <a href="/login">Log in</a></p>
       </div>
    </div>
  )
}

export default Main1
