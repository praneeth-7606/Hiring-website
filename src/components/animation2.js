import React from 'react'
import image18 from "./mainpage image.png";
import image19 from "./mainpage2 image.png"
// import './names.css';


function Animation2() {
  return (
    <div className="moving-container">
        <img  className="moving-image" src={image18} alt="my image" style={{width:'10%',height:'10%'}}/>
        <img  className="moving-image" src={image19} alt="my image" style={{width:'15%',height:'20%'}}/>
      {/* <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1"/> */}
    </div>
  )
}

export default Animation2
