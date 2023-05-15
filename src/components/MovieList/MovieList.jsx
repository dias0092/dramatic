import React, { useState, useEffect } from 'react';
import { fetchPopularMovies } from '../services/api';
import MovieCard from './MovieCard/MovieCard';
import './MovieList.css';


const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then(setMovies);
  }, []);

  if (!movies) return null; // loading

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movieId={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;