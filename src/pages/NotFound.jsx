import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import '../App.css';

const NotFound = () => {
  const history = useHistory();

  useEffect(() => {
    const toHome = setTimeout(() => {
      history.push('/');
      return clearTimeout(toHome);
    }, 5000);
  }, []); //eslint-disable-line

  return (
    <div className={'NotFoundPage'}>
      <h2 className={'NotFoundPage__title'}>404 - PAGE NOT FOUND</h2>

      <p>You will be redirected to the Home Page in 5 seconds</p>
    </div>
  );
};

export default NotFound;
