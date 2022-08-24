import React from "react";
import styles from "./description.module.css";
const Description = () => {
  return (
    <>
      <section>
        <div className={styles.descriptionContainer}>
          Staking is the way many cryptocurrencies verify their transactions, and it allows participants to earn rewards on their holdings.
          Staking can be a great way to use your crypto to generate passive income, especially because some cryptocurrencies offer high interest rates for staking. 
          Before you get started, it's important to fully understand how crypto staking works.
          We highly recommend that you learn more about risks of investing in crypto before starting staking.
        </div>
      </section>
    </>
  );
};

export default Description;
