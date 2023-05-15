import React, { useState, useEffect } from 'react';
import { fetchMovieTrailer } from '../services/api';
import './Trailer.css';

const Trailer = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    fetchMovieTrailer(movieId).then(setTrailerKey);
  }, [movieId]);

  if (!trailerKey) return null; // loading

  const trailerUrl = `https://www.youtube.com/watch?v=${trailerKey}`;

  return (
    <div className="trailer">
      <iframe
        width="560"
        height="315"
        src={trailerUrl}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Trailer;