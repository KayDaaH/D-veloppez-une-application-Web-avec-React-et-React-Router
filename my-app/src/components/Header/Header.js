import styles from "./Header.module.scss";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.link}>
              <Link to="/">Accueil</Link>
            </li>
            <li className={styles.link}>
              <Link to="/about">A Propos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
