import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <header className={styles.Nav}>
      <nav className={styles.Nav__box}>
        <ul className={styles.Nav__list}>
          <li className={styles.Nav__item}>
            <NavLink
              exact
              activeClassName={styles.active}
              className={styles.link}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={styles.Nav__item}>
            <NavLink
              exact
              activeClassName={styles.active}
              className={styles.link}
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
          {/* <li className={styles.Nav__item}>
            <NavLink
              activeClassName={styles.active}
              className={styles.link}
              to="/movies/:movieId"
            >
              Movie Detailes
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
