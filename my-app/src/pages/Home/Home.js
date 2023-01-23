import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.scss";
import Location from "../../components/Location/Location";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("./data.json")
        .then((res) => res.json())
        .then((json) => setData(json));
    };
    getData();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.bloc_image}>
          <div className={styles.darken}></div>
          <p className={styles.title}>Chez vous, partout et ailleurs</p>
        </div>
        <ul className={styles.blocs_container}>
          {data.map((location) => (
            <Location key={location.id} titre={location.title} />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
