import React from 'react'
import images from "./endpageicon.png" 
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import {Link} from 'react-router-dom';

function Endpage() {
  return (
    <div className='lastcomp'>
      <div className='endpage'>
        <div>
        <img src={images} alt="icon" style={{width:'100%' ,height:'90%'}}  />
        </div>
        {/* <div style={{display:'flex' ,alignItems: "center",justifyContent:"space-between"}}> */}
        <div style={{color:'white'}}>
        <p ><strong>For Candidates</strong></p>
        <p>Overview</p>
        <p>Startup Jobs</p>
        <p>Web3 Jobs</p>
        <p>Featured</p>
        <p>Salary Calculator</p>
        <p>Startup Hiring Data</p>
        <p>Tech Startups</p>
        <p>Remote</p>
        </div>
        <div style={{color:"white"}}>
        <p><strong>Features</strong></p>
        <p>Candidate Profiles</p>
        <p>Notifications</p>
        <p>Branding</p>
        <p>Automations</p>
        <p>Mobile Optimized</p>
        <p>Integration</p>
        <p>Bullhorn Integration</p>
        {/* <a href="/https://www.youtube.com/watch?v=Xpl8RRT8_Y0">mylink</a> */}
       
        </div>
        <div style={{color:'white'}}>
        <p><strong>For Recruiters</strong></p>
        <p>Overview</p>
        <p>Recruit Pro</p>
        <p>Curated</p>
        <p>RecruiterCloud</p>
        <p>Hire Developers</p>
        <p>Pricing</p>
        </div>
        <div style={{color:'white' }}>
        <p><strong>Company</strong></p>
        <p>About</p>
        <p>AngelList Venture</p>
        <p>Help</p>
        <p>Blog</p>
        <p>Terms & Risks</p>
        <p>Privacy & Cookies</p>
        </div>
        </div>
        <div style={{border:' 1px solid white',marginLeft:'5%',marginRight:'5%'}}></div>
        <div>
        <div style={{marginLeft:'5%' ,display:'flex',justifyContent:'space-between',alignItems:'center',marginRight:'5%'}}>
        <p style={{color:'white'}}>© 2023, Gustav Technologies, Inc. All Rights Reserved.</p>
        <div style={{ display:'flex',justifyContent:"space-between",gap:'10px'}}>
        <a style={{color:'white'}} href="https://www.instagram.com/"><InstagramIcon/></a>
        <a style={{color:'white'}} href="https://twitter.com/"><TwitterIcon/></a>
        <a style={{color:'white'}} href="https://www.linkedin.com/feed/"><LinkedInIcon/></a>
        <a style={{color:'white'}} href="https://www.youtube.com/"><YouTubeIcon/></a>
        <a style={{color:'white'}} href="https://www.facebook.com/">< FacebookIcon/></a>
        </div>

        </div>
        
        </div>
      
    </div>
  )
}

export default Endpage
