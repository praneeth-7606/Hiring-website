import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Navbar.css';
import Button from '@mui/material/Button';
import image from './mainicon.png'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
// import { capitalize } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const navigate=useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsMenuOpen(false);
  };
  // const submithandler=()=>{
  //   // e.preventDefault()
  //   navigate("/login")
  // }
  // const CustomButton = styled(Button)(({ theme }) => ({
  //   '&:hover': {
  //     backgroundColor: "red",
  //     // Add other hover styles as needed
  //   },
  // }));
  
  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="navbar-logo">
        {/* Insert your logo here */}
        {/* Logo */}
        <img src={image} alt="myimage" width="60%" height="60%" />
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#11">Home</a>
        <div className="navbar-dropdown" onMouseLeave={toggleDropdown}>
          <a href="#12" onMouseEnter={toggleMenu}>
            About
            {isMenuOpen && (
              <div className="dropdown-content">
                <div className="grid">
                  <div className='hello'>
                  <AccountBalanceIcon/>
                  <a href="#223">Item 1</a>
                  </div>
                  <div className='hello'>
                  <AccountBalanceIcon/>
                  <a href="#34">Item 2</a>
                  </div>
                  <div className='hello'>
                  <AccountBalanceIcon/>
                  <a href="#46">Item 3</a>
                  </div>
                  <div className='hello'>
                  <AccountBalanceIcon/>
                  <a href="#2">Item 4</a>
                  </div>
                  <div className='hello'>
                  <AccountBalanceIcon/>
                  <a href="#1">Item 5
                  </a></div>
                  <div className='hello'>
                  <AccountBalanceIcon/>
                  <a href="#6">Item 6
                  </a></div>
                  <div className='hello'>
                  <AccountBalanceIcon/>
                  <a href="#6">Item 7
                  </a></div>
                  <div className='hello'>
                  <AccountBalanceIcon/>
                  <a href="#44">Item 8
                  </a></div>
                  <div className='hello'>
                  <AccountBalanceIcon/>
                  <a href="#87">Item 9
                  </a></div>
                  
                </div>
              </div>
            )}
          </a>
        </div>
        <div className="navbar-dropdown" onMouseLeave={toggleDropdown}>
          <a href="#345" onMouseEnter={toggleMenu}>
            Products
            {isMenuOpen && (
              <div className="dropdown-content">
                <div className="grid">
                  {/* <AccountBalanceIcon/> */}
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 1</a>
                  </div>
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 2</a>
                  </div>
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 3</a>
                  </div>
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 4</a>
                  </div>
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 5</a>
                  </div>
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 6</a>
                  </div>
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 7</a>
                  </div>
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 8</a>
                  </div>
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 9</a>
                  </div>

                  {/* <a href="#567">Item 2</a>
                  <a href="#456">Item 3</a>
                  <a href="#345">Item 4</a>
                  <a href="#443">Item 5</a>
                  <a href="#2334">Item 6</a>
                  <a href="#2222">Item 7</a>
                  <a href="#22">Item 8</a>
                  <a href="#00">Item 9</a> */}
                </div>
              </div>
            )}
          </a>
        </div>
        <div className="navbar-dropdown" onMouseLeave={toggleDropdown}>
          <a href="#345" onMouseEnter={toggleMenu}>
            Customers
            {isMenuOpen && (
              <div className="dropdown-content">
                <div className="grid">
                  {/* <AccountBalanceIcon/> */}
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 1</a>
                  </div>
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 2</a>
                  </div>
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 3</a>
                  </div>
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 4</a>
                  </div>
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 5</a>
                  </div>
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 6</a>
                  </div>
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 7</a>
                  </div>
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 8</a>
                  </div>
                  <div className='hello'>
                 <AccountBoxIcon/>
                  <a href="#223">Item 9</a>
                  </div>

                  {/* <a href="#567">Item 2</a>
                  <a href="#456">Item 3</a>
                  <a href="#345">Item 4</a>
                  <a href="#443">Item 5</a>
                  <a href="#2334">Item 6</a>
                  <a href="#2222">Item 7</a>
                  <a href="#22">Item 8</a>
                  <a href="#00">Item 9</a> */}
                </div>
              </div>
            )}
          </a>
        </div>
        <a href="#1222">Contact</a>          
        {/* style={{height:"80%", width:'20%'}} */}
        {/* style={{height:"70%", width:'20%' ,textTransform:"capitalize"}} */}

      </div>
      <div style={{display:'flex',gap:'20px', marginLeft:'100px'}}>
      <a href="/page1"><Button   variant="contained"  sx={{
        backgroundColor: 'orange', 
        color: 'white', 
        '&:hover': {
          backgroundColor: 'red', 
        },
      }}
       style={{ width:"100%",textTransform:'capitalize',justifyContent:'space-between', }}>Login</Button></a>
      <a href="/signup"><Button   variant="contained"  sx={{
        backgroundColor: 'black', 
        color: 'white', 
        '&:hover': {
          backgroundColor: 'green', 
        },
      }} style={{height:"100%",width:"100%",textTransform:'capitalize',justifyContent:'space-between'}} >SignUp</Button></a>
        
      </div>
    </nav>
  );
}

export default Navbar;
