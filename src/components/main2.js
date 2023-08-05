import React from 'react'
import { Button } from '@mui/material'
// import { makeStyles } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import image7 from './mainpage2 image.png';
import image8 from './mainpage22.png';
import image9 from './page2icon1.png'
import image10 from './icon2.png'
import image11 from './icon3.png'


// import { ThemeProvider } from '@mui/material/styles';
// import theme from './theme';

// const useStyles = makeStyles((theme) => ({
//   customButton: {
//     '&:hover': {
//       backgroundColor: theme.palette.secondary.main,
//     },
//   },
// }));

function Main2() {
    // const classes = useStyles();
  return (
    <div  className='main2'>
        
      <div style={{display:'flex',alignItems:'center'}}>
        <div className='leftmain2'>
            <img src={image7} alt="myimage2" style={{height:'80%' , width:'90%'}}/>
        </div>
        <div className='rightmain2'>
        <h4>GOT TALENT?</h4>
        <h1>Why job seekers<br></br> love us</h1>
        <p>Unique jobs at startups and tech companies you<br></br> can't find anywhere else</p>
        <p>Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.</p>
        <p>Everything you need to know to job search -<br></br> including seeing salary and stock options upfront<br></br> when looking</p>
        <p>Connect directly with founders at top startups - no third party recruiters allowed</p>
        <div style={{display:"flex",gap:'10px'}}>
        <Button style={{ borderRadius:'10px',textTransform:"capitalize"  ,color:'black'}}sx={{
        backgroundColor: 'white', 
        color: 'black', 
        '&:hover': {
          backgroundColor: 'orchid', 
        },
      }} variant="contained" >learn more</Button>
        <a href="/signup"><Button style={{ borderRadius:'10px',textTransform:"capitalize" }} sx={{
        backgroundColor: 'black', 
        color: 'white', 
        '&:hover': {
          backgroundColor: 'brown', 
        },
      }}variant="contained" >Signup now</Button></a>
        </div>
        </div>
        
      </div>
      <br></br>

        <div style={{display:'flex' ,alignItems:'center' ,justifyContent:'space-between'}}>
            <div className='left2'>
             {/* <h4>hi hello sir</h4> */}
            <h4>NEED TALENT?</h4>
            <h1>Why recruiters<br></br> love us</h1>
            <div style={{display:'flex',alignItems:'center'}}>
            <img src={image9} alt="myicon" height="13%" width="13%"   />  
            <p>8 million responsive and startup-ready candidates,<br></br> with all the information you need to vet them</p>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
              <img src={image10} alt="image10" height="9%" style={{paddingLeft:'3%'}} width="9%"/>
            <p>Everything you need to kickstart your recruiting - get <br></br>job posts, company branding, and HR tools set up <br></br>within<strong>10 minutes, for free</strong> </p>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
            <img src={image11} alt="image11" height="6%" style={{paddingLeft:'3%',paddingRight:'3%'}} width="6%"/>
           <p>A free <strong>applicant tracking system</strong>, or free integration <br></br> with any ATS you may already use</p>
            </div>  
        <p style={{paddingLeft:'1.5%'}}>Plus, we can do the vetting for you! With Curated, we review <br></br>the world's top tech talent and highlight candidates directly<br></br> to you 2x a week.</p>
          <br></br>
          <div style={{display:"flex",gap:'10px'}}>
          <Button style={{ borderRadius:'10px',textTransform:"capitalize",height:'2%'  ,color:'black'}}sx={{
        backgroundColor: 'white', 
        color: 'black', 
        '&:hover': {
          backgroundColor: 'green', 
        },
      }} variant="contained" >learn more</Button>
          <Button style={{ borderRadius:'10px',textTransform:"capitalize" }}sx={{
        backgroundColor: 'black', 
        color: 'white', 
        '&:hover': {
          backgroundColor: 'blue', 
        },
      }} variant="contained" >Signup now</Button>
          </div>
            </div>
            <div  style={{width:'50%',}}>
            <img src={image8} alt="image8" style={{height:'70%',width:'100%' }} />
            </div>

        
        </div>
        
      
    </div>
  )
}

export default Main2
