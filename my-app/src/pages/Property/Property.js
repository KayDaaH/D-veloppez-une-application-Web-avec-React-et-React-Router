import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../components/DataContext";
import Slideshow from "../../components/Slideshow/Slideshow";
import Tags from "../../components/Tags/Tags";
import AboutMenu from "../../components/AboutMenu/AboutMenu";
import styles from "./Property.module.scss";
import Stars from "../../components/Stars/Stars";
import Footer from "../../components/Footer/Footer";

const Property = () => {
  let { id } = useParams();
  const data = useContext(DataContext);
  const dataProperty = data.filter((e) => e.id.includes(id));
  const {
    description,
    equipments,
    location,
    tags,
    title,
    rating,
    pictures,
    host,
  } = dataProperty[0];

  return (
    <div className={styles.main}>
      <Slideshow pictures={pictures} />
      <div className={styles.globalInfosContainer}>
        <div className={styles.leftContainer}>
          <p>{title}</p>
          <div className={styles.location}>{location}</div>
          <div className={styles.blocTags}>
            {tags.map((tag, index) => (
              <div key={index}>
                <Tags tag={tag} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.hote}>
            <div>{host.name}</div>
            <img src={host.picture} alt="avatar de l'hôte" />
          </div>
          <Stars rating={rating} />
        </div>
      </div>
      <div className={styles.blocMenus}>
        <div className={styles.description}>
          <AboutMenu title="Description" text={description} />
        </div>
        <div className={styles.equipements}>
          <AboutMenu title="Équipements" text={equipments} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Property;
