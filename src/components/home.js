import React from 'react'
import Endpage from './endpage.js';
import Main2 from './main2';
import Mainpage from './mainpage';
import Movingelements from './movingelements.js';
// import Mybar from './components/mybar';
import Navbar from './navbar';

import Movingimages from './movingimages';
import Middle from './middle';
import Main1 from './main1';

function Home() {
    const images = [
        // 'https://1000logos.net/wp-content/uploads/2022/05/Airtable-Logo.png',
        'https://cdn2.downdetector.com/static/uploads/logo/airtablelogo.png',
        'https://upload.wikimedia.org/wikipedia/commons/3/32/Alpine_logo.png',
        'https://1000logos.net/wp-content/uploads/2017/09/Roblox-Logo.png',
        'https://www.hatchwise.com/wp-content/uploads/2022/08/Peloton-Logo.jpeg',
        // 'https://assets.stickpng.com/images/608ac4d30517f5000437ccd0.png',
        'https://getcruise.com/logo.png',
        'https://1000logos.net/wp-content/uploads/2021/06/DoorDash-logo.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Plaid_logo.svg/800px-Plaid_logo.svg.png'
    
      ];
  return (
    <div>
    <Navbar/>
     <Mainpage/>
     <Main1/>
    
     <Movingelements images={images} gap={200} animationDuration={1000} />
     <Main2/>
     
     <Middle/>

     <Movingimages/>
     
     
     <Endpage/>
    </div>
  )
}

export default Home
