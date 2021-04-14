import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import Nav from './components/Nav';
// import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => (
  <>
    <Nav />

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies" exact component={MoviesPage} />
      {/* <Route path="/movies/:movieId" component={MovieDetailsPage} /> */}
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
