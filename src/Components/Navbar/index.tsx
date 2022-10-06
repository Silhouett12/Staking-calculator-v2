import React from "react";
import styles from "./navbar.module.css";


const Navbar = () => {
  return (
    <header className={styles.navbarDiv}>
      <nav className={styles.mainDiv}>
        <div className={styles.logoDiv}></div>
        <div className={styles.groupDiv}>
          <button className={styles.navbarButton}>
            <a
              className={styles.NavLink}
              href={"https://pablolamadrid.netlify.app/"}
            >
              Portfolio
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
