import React from "react";
import styles from "./Location.module.scss";

const Location = ({ titre }) => {
  console.log(titre);
  return (
    <div className={styles.main}>
      <p>{titre}</p>
    </div>
  );
};

export default Location;
