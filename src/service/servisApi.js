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
    // break;

    case 'review':
      return newFetch(`${BASE_URL}/movie/${value}/reviews?api_key=${API_KEY}`);
    // break;

    case 'info':
      return newFetch(`${BASE_URL}/movie/${value}?api_key=${API_KEY}`);
    // break;

    case 'query':
      return newFetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${value}&page=1`,
      );
    // break;

    default:
      return newFetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    // break;
  }
};

// fetchQueryHandler('cast', 615678);
// fetchQueryHandler('review', 615678);
// fetchQueryHandler('info', 615678);

//===========================================
// const fetchOn = () =>
//   fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
//     .then(res => res.json())
//     .then(data => data);

export default fetchQueryHandler;

/*
// let query = '';
// let movieId = 1;

const trendingMovies = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
const searchingQuery = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1`;
const movieInfo = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
const movieCast = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
const movieReviews = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;

console.log('this is cast');
movieId = options[1];

console.log('this is review');
movieId = options[1];

console.log('this is info');
movieId = options[1];

console.log('this is searching');
query = options[1];

console.log('this is trend');

*/
