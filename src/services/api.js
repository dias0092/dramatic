const API_KEY = '0a31c569effbf05f2db312eae694a092'; 
const API_BASE_URL = 'https://api.themoviedb.org/3';

export function fetchMovie(id) {
  return fetch(`${API_BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    .then(response => response.json());
}

export function fetchPopularMovies() {
  return fetch(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => data.results);
}

export function fetchMovieTrailer(id) {
  return fetch(`${API_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => data.results[0]?.key);
}