import styles from "./Footer.module.scss";
import logoblack from "./logoblack.png";

function Footer() {
  return (
    <header className={styles.main}>
      <div className={styles.logo}>
        <img className={styles.logoblack} src={logoblack} alt="logo" />
      </div>
      <div className={styles.mention}>© 2020 Kasa. All rights reserved</div>
    </header>
  );
}

export default Footer;
