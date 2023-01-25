import React from "react";
import styles from "./Tags.module.scss";

const Tags = ({ tag }) => {
  return <div className={styles.main}>{tag}</div>;
};

export default Tags;
