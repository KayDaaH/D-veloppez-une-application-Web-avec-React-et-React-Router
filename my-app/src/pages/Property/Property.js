import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../components/DataContext";
import Slideshow from "../../components/Slideshow/Slideshow";
// import { DataContext } from "../../components/DataContext";
import styles from "./Property.module.scss";

const Property = () => {
  let { id } = useParams();
  const data = useContext(DataContext);
  const dataProperty = data.filter((e) => e.id.includes(id));
  const { description, equipments, location, tags, title, rating, pictures } =
    dataProperty[0];
  console.log(dataProperty);

  return (
    <div className={styles.main}>
      <div className={styles.slideshow}>
        <Slideshow pictures={pictures} />
      </div>
      <h2>TITRE :{title}</h2>
      <div>DESCRIPTION : {description}</div>
      <div>ÉQUIPEMNETS : {equipments}</div>
      <div>LOCALISATION :{location}</div>
      <div>TAGS :{tags}</div>
      <div>IMAGES : {pictures} </div>

      <div>NOTE :{rating}</div>
    </div>
  );
};

export default Property;
