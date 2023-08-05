// import React, { useState, useEffect } from 'react';
// import './Slidingpictures.css'; // Import your CSS file for styling

// const Movingelements = ({ images, gap, animationDuration }) => {
//   const [offset, setOffset] = useState(0);

//   useEffect(() => {
//     const animationTimer = setInterval(() => {
//       setOffset((prevOffset) => prevOffset - gap);
//     }, animationDuration);

//     return () => clearInterval(animationTimer);
//   }, [gap, animationDuration]);

//   return (
//     <div className="sliding-pictures-container">
//       <div
//         className="sliding-pictures-inner"
//         style={{ transform: `translateX(${offset}px)` }}
//       >
//         {images.map((image, index) => (
//           <img key={index} src={image} alt={`Image ${index}`} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Movingelements;
// import React, { useState, useEffect } from 'react';
// import './Slidingpictures.css'; // Import your CSS file for styling

// const Movingelements = ({ images, gap, animationDuration }) => {
//   const [offset, setOffset] = useState(0);
//   const containerWidth = (images.length * 200) + ((images.length - 1) * gap);

//   useEffect(() => {
//     const animationTimer = setInterval(() => {
//       setOffset((prevOffset) => {
//         if (prevOffset <= -containerWidth) {
//           return prevOffset + containerWidth;
//         } else {
//           return prevOffset - gap;
//         }
//       });
//     }, animationDuration);

//     return () => clearInterval(animationTimer);
//   }, [containerWidth, gap, animationDuration]);

//   return (
//     <div className="sliding-pictures-container">
//       <div
//         className="sliding-pictures-inner"
//         style={{
//           transform: `translateX(${offset}px)`,
//           width: containerWidth + 'px',
//         }}
//       >
//         {images.map((image, index) => (
//           <img key={index} src={image} alt={`Image ${index}`} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Movingelements;
import React, { useState, useEffect } from 'react';
import './Slidingpictures.css'; // Import your CSS file for styling

const Movingelements = ({ images, gap, animationDuration }) => {
  const [offset, setOffset] = useState(0);
  const containerWidth = (images.length * 200) + ((images.length - 1) * gap);
  const combinedImages = [...images, ...images]; // Duplicate the images

  useEffect(() => {
    const animationTimer = setInterval(() => {
      setOffset((prevOffset) => {
        if (prevOffset <= -containerWidth) {
          return prevOffset + containerWidth;
        } else {
          return prevOffset - gap;
        }
      });
    }, animationDuration);

    return () => clearInterval(animationTimer);
  }, [containerWidth, gap, animationDuration]);

  return (
    <div className="sliding-pictures-container">
      <div
        className="sliding-pictures-inner"
        style={{
          transform: `translateX(${offset}px)`,
          width: containerWidth * 2 + 'px', // Double the width to accommodate the duplicated images
        }}
      >
        {combinedImages.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Movingelements;




