import { Button } from '@mui/material'
import React from 'react'
import my1 from "./mainpage image.png"


function Mainpage() {
  return (
    
    <div className='main'>
        <div className='left'>
            <div className='heading'>
        <h1>AngelList Talent <br></br>
        is now <br></br>
        Wellfound</h1>
        </div>
        <p style={{fontSize:'130%'}}>Where startups and job seekers connect.</p>
        <br></br>
        <div style={{display:"flex",gap:"10px"}}>
          
        <Button  style={{borderRadius:'15px',textTransform:"capitalize"}} sx={{
        backgroundColor: 'black', 
        color: 'white', 
        '&:hover': {
          backgroundColor: 'violet', 
        },
      }}variant="contained">Find your next hire</Button>
        <Button  sx={{
        backgroundColor: 'white', 
        color: 'black', 
        '&:hover': {
          backgroundColor: 'green', 
        },
      }}style={{borderRadius:'15px',textTransform:"capitalize"}} variant="outlined">Find your next job</Button>
        </div>
        </div>
        <div className='right'>
            <img src={my1} alt="image" height="10%"  width="70%"/>
        </div>
        
    </div>
    
  )
}

export default Mainpage
