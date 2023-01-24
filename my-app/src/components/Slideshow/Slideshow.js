import React, { useState } from "react";
import styles from "./Slideshow.module.scss";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const picturesLength = pictures.length;

  const rightClick = () => {
    if (currentIndex === picturesLength - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    console.log(currentIndex);
  };
  const leftClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(picturesLength - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    console.log(currentIndex);
  };

  return (
    <div className={styles.main}>
      <div className={styles.pictureContainer}>
        <img
          className={styles.picture}
          src={pictures[currentIndex]}
          alt="location"
        ></img>
        {picturesLength > 1 && (
          <div>
            <div className={styles.leftArrow} onClick={leftClick}>
              &#60;
            </div>
            <div className={styles.rightArrow} onClick={rightClick}>
              &#62;
            </div>
          </div>
        )}
        <div className={styles.counter}>
          {" "}
          {currentIndex + 1}/{picturesLength}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
