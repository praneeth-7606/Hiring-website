import React, { useState, useEffect } from 'react';

const Page1 = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    // Show the image for 10 seconds
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 10000);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Redirect to a new page after 10 seconds
    if (!showImage) {
      setTimeout(() => {
        // Replace the URL with the desired page URL
        window.location.replace('/login');
      }, 1000);
    }
  }, [showImage]);

  return (
    <div style={{paddingLeft:'20%',paddingTop:'3%'}}>
      {showImage && <img src="https://cdn.dribbble.com/users/962032/screenshots/2804470/login_shot.gif" alt="Image" />}
    </div>
  );
};

export default Page1;
