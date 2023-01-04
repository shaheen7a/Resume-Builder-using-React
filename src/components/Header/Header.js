import React from "react";


import styles from "./Header.module.css";

function Header() {
  const resumeImg = "https://cdn-icons-png.flaticon.com/512/5388/5388064.png";
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          <span>Online Resume</span> Builder
        </p>
        <p className={styles.heading}>
          >> Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeImg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
