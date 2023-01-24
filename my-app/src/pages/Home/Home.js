import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.scss";
import Location from "../../components/Location/Location";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../components/DataContext";

function Home() {
  let navigate = useNavigate();
  const data = useContext(DataContext);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.bloc_image}>
          <div className={styles.darken}></div>
          <p className={styles.title}>Chez vous, partout et ailleurs</p>
        </div>
        <ul className={styles.blocs_container}>
          {data.map((location) => (
            <div
              key={location.id}
              className={styles.navigate}
              onClick={() => {
                navigate(`/property/${location.id}`);
              }}
            >
              <Location titre={location.title} />
            </div>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
