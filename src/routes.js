import { lazy } from 'react';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);

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
