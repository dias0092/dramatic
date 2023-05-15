// Home.jsx
import React from 'react';
import Trailer from '../components/Trailer/Trailer';
import MovieList from '../components/MovieList/MovieList';
import './Home.css';
// Sample movies data
const movies = [
  {id: 1, title: 'Movie 1', poster: 'url-to-poster-1', year: 2021, rating: 7.5},
  // add more movies...
];

const Home = () => {
  return (
    <div>
      <Trailer trailerUrl="url-to-trailer" />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;