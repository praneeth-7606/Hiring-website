import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './names.css'; // Import the CSS file for styling
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import pic4 from "./pic4.png";
import pic5 from "./pic5.png";
import pic6 from "./pic6.png";

const Movingimages = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={2000} // Set the time interval between slides (in milliseconds)
      showStatus={true} // Hide the status bar
      showThumbs={false} // Hide the thumbnail navigation
    >
      <div >
        <img src={pic2} alt="Slide 1" style={{width:'100%',height:'100%'}} />
      </div>
      <div>
        <img src={pic3} alt="Slide 2" style={{width:'100%',height:'100%'}} />
      </div>
      <div>
        <img src={pic4} alt="Slide 3" style={{width:'100%',height:'100%'}} />
      </div>
      <div>
        <img src={pic5} alt="Slide 3" style={{width:'100%',height:'100%'}} />
      </div>
      <div>
        <img src={pic6} alt="Slide 3" style={{width:'100%',height:'100%'}} />
      </div>
      <div>
        <img src={pic1} alt="Slide 3" style={{width:'100%',height:'100%'}} />
      </div>
      {/* Add more slides as needed */}
    </Carousel>
  );
};

export default Movingimages;
