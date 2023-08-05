import React from 'react'
import myicons from   "./icon123.png"
import "./middle.css"

function Middle() {
  return (
    <div>
        <div className='middle'>
        <p><strong>DON'T JUST TAKE IT FROM US</strong></p>
        <h1 >From our users</h1>
        </div>
        <div className='boxes'>
            <div className='leftbox'>
               
            <img src={myicons} alt="myicon" style={{width:'7%',height:'50%'}}/>
            <p>I got my tech job on Wellfound (AngelList Talent) 4 years ago and I'm<br></br> still happy! Pays well, great culture, and unlimited PTO.</p>
            </div>
            
            <div className='rightbox'>
            <img src={myicons} alt="myicon" style={{width:'7%',height:'50%'}}/>
            <p>I love Wellfound (AngelList Talent). I got my current job at a startup <br></br>entirely through the site last year - it's super easy to use and I love<br></br>the UI.</p>
            </div>    
      </div>
      <div className='boxes'>
            <div className='leftbox1'>
            <img src={myicons} alt="myicon" style={{width:'7%',height:'50%'}}/>
            <p>I can't imagine my day to day without this platform. Life would be a<br></br> lot more difficult.</p>
            </div>
            <div className='rightbox1'>
            <img src={myicons} alt="myicon" style={{width:'7%',height:'50%'}}/>
            <p> Half of the offers I give are sourced from Wellfound (AngelList<br></br> Talent). It's the best product for anyone looking for startup talent.</p>
            </div>    
      </div>

    </div>
  )
}

export default Middle
