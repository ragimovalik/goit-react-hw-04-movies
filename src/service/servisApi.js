import API_KEY from './apiKey';

const BASE_URL = 'https://api.themoviedb.org/3';

const newFetch = url =>
  fetch(url)
    .then(res => res.json())
    .then(data => data);

const fetchQueryHandler = (keyWord, value) => {
  switch (keyWord) {
    case 'cast':
      return newFetch(`${BASE_URL}/movie/${value}/credits?api_key=${API_KEY}`);

    case 'review':
      return newFetch(`${BASE_URL}/movie/${value}/reviews?api_key=${API_KEY}`);

    case 'info':
      return newFetch(`${BASE_URL}/movie/${value}?api_key=${API_KEY}`);

    case 'query':
      return newFetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${value}&page=1`,
      );

    default:
      return newFetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  }
};

export default fetchQueryHandler;

/*
const trendingMovies = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
const searchingQuery = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1`;
const movieInfo = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
const movieCast = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
const movieReviews = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;
*/
