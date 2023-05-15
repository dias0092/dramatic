// Movies.jsx
import React from 'react';
import MovieList from '../components/MovieList/MovieList';

// Sample Movies data
const movies = [
  {id: 1, title: 'Movie 1', poster: 'url-to-poster-1', year: 2021, rating: 7.5},
  // add more movies...
];

const Movies = () => {
  return (
    <div>
      <h1>Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;