// Trailer.js
import React from 'react';
import './Trailer.css';

const Trailer = ({ trailerUrl }) => {
  return (
    <div className="trailer">
      <video controls>
        <source src={trailerUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Trailer;