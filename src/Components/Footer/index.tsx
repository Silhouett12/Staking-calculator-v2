import React from "react";
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footerDiv}>
      <div className={styles.footerInfo}>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <a href="https://pablolamadrid.netlify.app/">Created by Pablo La Madrid</a>
          </div>
          <div className={styles.infoItem}>
            <a href="mailto:pablonicolaslm@gmail.com?subjet=Work+purpose">Contact</a>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.imgDiv}>
            <a href="https://github.com/Silhouett12/Staking-calculator-v2" >
              <img src={require("./images/signo-de-github.png")} alt="" />
            </a>
          </div>
          <div className={styles.imgDiv}>
                <a href="https://www.linkedin.com/in/pablo-la-madrid-934298248/">
              <img src={require("./images/linkedin.png")} alt="" />     
                </a>
          </div>
        </div>
      </div>
      <div className={styles.linkedin}>
      </div>
    </footer>
  );
};

export default Footer;
