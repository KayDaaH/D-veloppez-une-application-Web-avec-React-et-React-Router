import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../components/DataContext";
// import { DataContext } from "../../components/DataContext";
import styles from "./Property.module.scss";

const Property = () => {
  let { id } = useParams();
  const data = useContext(DataContext);
  const dataProperty = data.filter((e) => e.id.includes(id));
  const { description, equipments, location, tags, title, rating } =
    dataProperty[0];

  return (
    <div className={styles.main}>
      <h2>TITRE :{title}</h2>
      <div>DESCRIPTION : {description}</div>
      <div>ÉQUIPEMNETS : {equipments}</div>
      <div>LOCALISATION :{location}</div>
      <div>TAGS :{tags}</div>

      <div>NOTE :{rating}</div>
    </div>
  );
};

export default Property;
