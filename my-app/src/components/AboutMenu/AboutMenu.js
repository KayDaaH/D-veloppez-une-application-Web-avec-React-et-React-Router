import React, { useState } from "react";
import styles from "./AboutMenu.module.scss";

const AboutMenu = ({ title, text }) => {
  const [dropdownIsOpen, setdropdownIsOpen] = useState(false);

  function openDropdown() {
    setdropdownIsOpen(!dropdownIsOpen);
  }

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <p>{title}</p>
        <div
          className={
            dropdownIsOpen
              ? `${styles.icon} ${styles.active}`
              : `${styles.icon}`
          }
          onClick={() => openDropdown()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 test"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <div
        className={
          dropdownIsOpen ? `${styles.text} ${styles.active}` : `${styles.text}`
        }
      >
        {typeof text == "string" ? (
          <div>{text}</div>
        ) : (
          text.map((equipment, index) => <div key={index}>{equipment}</div>)
        )}
      </div>
    </div>
  );
};

export default AboutMenu;
