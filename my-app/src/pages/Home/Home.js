import styles from "./Home.module.scss";
import image from "./image.jpg";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.bloc_image}>
          <img className={styles.landscape} src={image} alt="landscape" />
          <p className={styles.title}>Chez vous, partout et ailleurs</p>
        </div>
        <div className={styles.blocs_container}></div>
      </div>
    </div>
  );
}

export default Home;
