import { useState, useEffect } from 'react';
import fetchQueryHandler from '../service/servisApi';

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchQueryHandler('trend').then(({ results }) => setFilms(results));
  }, []);

  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>{film.title}</li>
      ))}
    </ul>
  );
};

export default HomePage;
