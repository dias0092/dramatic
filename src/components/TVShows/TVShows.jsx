// TVShows.jsx
import React from 'react';
import MovieList from '../components/MovieList/MovieList';
import './TVShows.css';

// Sample TV Shows data
const tvShows = [
  {id: 1, title: 'TV Show 1', poster: 'url-to-poster-1', year: 2021, rating: 8.0},
  // add more TV Shows...
];

const TVShows = () => {
  return (
    <div>
      <h1>TV Shows</h1>
      <MovieList movies={tvShows} />
    </div>
  );
};

export default TVShows;