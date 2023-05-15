// MovieCard.js
import React, { useState, useEffect } from 'react';
import { fetchMovie } from '../services/api';
import './MovieCard.css';

const MovieCard = ({ movieId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return null;

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.year}</p>
      <div className="imdb-rating">IMDb {movie.rating}</div>
      <button>Watch</button>
      <button>Add to favorites</button>
    </div>
  );
};

export default MovieCard;