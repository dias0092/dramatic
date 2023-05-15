// GenresFilter.jsx
import React from 'react';
import './GenresFilter.css';

const GenresFilter = () => {
  return (
    <div className="genres-filter">
      <button>All</button>
      <button>Hindi</button>
      <button>Bengali</button>
      <button>Marathi</button>
      <button>Assamese</button>
      <button>Telugu</button>
      <button>Tamil</button>
      <button>Malayalam</button>
    </div>
  );
};

export default GenresFilter;