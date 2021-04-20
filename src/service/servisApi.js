import API_KEY from './apiKey';

const BASE_URL = 'https://api.themoviedb.org/3';

const newFetch = url =>
  fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log('Error on server side', error));

const fetchQueryHandler = ({ keyWord, pageNumber = 1, value }) => {
  switch (keyWord) {
    case 'cast':
      return newFetch(`${BASE_URL}/movie/${value}/credits?api_key=${API_KEY}`);

    case 'review':
      return newFetch(`${BASE_URL}/movie/${value}/reviews?api_key=${API_KEY}`);

    case 'info':
      return newFetch(`${BASE_URL}/movie/${value}?api_key=${API_KEY}`);

    case 'query':
      return newFetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${value}&page=${pageNumber}`,
      );

    case 'nPage':
      return newFetch(
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${pageNumber}`,
      );

    default:
      return newFetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  }
};

export default fetchQueryHandler;
