import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./apiRest.module.css";
const ApiRest = () => {
  const [data, setData] = useState();

  const getApiInfo = async () => {
    const url = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h"
    );
    const apiInfo = url.data.map((e) => {
      return {
        id: e.market_cap_rank,
        name: e.name,
        image: e.image,
        currentPrice: e.current_price,
        priceChange: e.price_change_24h,
        priceChangePerHour: e.price_change_percentage_1h_in_currency,
      };
    });
    setData(apiInfo);
  };

  useEffect(() => {
    getApiInfo();
  }, [data]);
  return (
    <div>
    <h1 className={styles.title}>TOP 10 COINS</h1>
      <ul>
        <li className={styles.coinInfo}>
          <div className={styles.nameDiv}>
            <div className={styles.id}>#</div>
            <div className={styles.name}>COIN</div>
          </div>
          <div className={styles.symbol}>SYMBOL</div>
          <div className={styles.currentPrice}>Current Price</div>
          <div className={styles.priceChange}>Price Change</div>
          <div className={styles.priceChangePerHour}>Porcentage Change Per Hour</div>
        </li>
        {data
          ? data.map((el) => {
              return (
                <li className={styles.listPrice}>
                  <div className={styles.nameDiv}>
                    <div className={styles.id}>{el.id}</div>
                    <div className={styles.name}>{el.name}</div>
                  </div>

                  <img className={styles.symbol}src={el.image} alt={el.name} />
                  <div className={styles.currentPrice}> {el.currentPrice}</div>
                  <div
                    className={
                      data.priceChanges > 0
                        ? styles.priceChangeUp
                        : styles.priceChangeDown
                    }
                  >
                  $ {el.priceChange}
                  </div>
                  <div 
                  className={
                    data.priceChangesPerHour > 0 ? styles.priceChangePerHourUp : styles.priceChangePerHourDown 
                   }>
                    % {el.priceChangePerHour}
                  </div>
                </li>
              );
            })
          : "...loading"}
      </ul>
    </div>
  );
};

export default ApiRest;
