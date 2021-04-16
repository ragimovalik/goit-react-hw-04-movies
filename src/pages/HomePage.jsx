import { useState, useEffect } from 'react';
import fetchQueryHandler from '../service/servisApi';

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchQueryHandler('trend').then(data => {
      console.log(data);
      setFilms(data.results);
    });
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
