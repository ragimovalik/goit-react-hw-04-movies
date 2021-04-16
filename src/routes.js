import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFound from './pages/NotFound';

export const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
    label: 'Home Page',
  },

  {
    path: '/movies',
    exact: true,
    component: MoviesPage,
    label: 'Movies Page',
  },
  {
    path: '/movies/:movieId',
    component: MovieDetailsPage,
    label: 'Movie Detail',
  },
];

/*
showInMenu: true
*/
