import { Link } from "react-router-dom";
import styles from "./Error.module.scss";

function Error() {
  return (
    <div className={styles.main}>
      <h2 className={styles.error}>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className={styles.link} to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
