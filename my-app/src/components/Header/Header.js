import styles from "./Header.module.scss";
import logo from "./logo.jpg";
import { Link, useLocation } from "react-router-dom";

function Header() {
  let { pathname } = useLocation();

  return (
    <header className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>

        <nav className={styles.nav}>
          {pathname === "/" ? (
            <ul className={styles.list}>
              <li className={`${styles.link} ${styles.active}`}>
                <Link to="/">Accueil</Link>
              </li>
              <li className={styles.link}>
                <Link to="/about">A Propos</Link>
              </li>
            </ul>
          ) : (
            <ul className={styles.list}>
              <li className={styles.link}>
                <Link to="/">Accueil</Link>
              </li>
              <li className={`${styles.link} ${styles.active}`}>
                <Link to="/about">A Propos</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
