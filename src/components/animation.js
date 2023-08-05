import React from 'react';
import './names.css'; // Import the CSS file for styling

const MovingNames = () => {
  return (
    <div className="moving-container">
      <div className="moving-content">
        <span>John Doe</span>
        <span>Jane Smith</span>
        <span>Alice Johnson</span>
        <span>Bob Brown</span>
        {/* Add more names or elements as needed */}
      </div>
    </div>
  );
};

export default MovingNames;
