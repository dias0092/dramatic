// MovieCard.js
import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
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