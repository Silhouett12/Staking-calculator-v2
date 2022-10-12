import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./apiRest.module.css";

interface apiInfo {
  currentPrice: number;
  id: number;
  image: string;
  name: string;
  priceChange: number;
  priceChangePerHour: number;
}

const ApiRest = () => {
  const [data, setData] = useState<apiInfo[]>([]);

  const getApiInfo = async () => {
    const url = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h"
    );
    const apiInfo = url.data.map((e: any) => {
      return {
        id: e.market_cap_rank,
        name: e.name,
        image: e.image,
        currentPrice: e.current_price.toFixed(2),
        priceChange: e.price_change_24h,
        priceChangePerHour: e.price_change_percentage_24h,
      };
    });
    setData(apiInfo);
  };

  useEffect(() => {
    getApiInfo();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getApiInfo();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [data]);

  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.tableContainer}>
        <h1 className={styles.title}>TOP 10 COINS</h1>
        <div className={styles.coinInfo}>
          <div className={styles.nameDiv}>
            <div className={styles.id}>#</div>
            <div className={styles.name}>COIN</div>
          </div>
          <div className={styles.symbolName}>SYMBOL</div>
          <div className={styles.currentPrice}>Current Price</div>
          <div className={styles.priceChange}>Price Change</div>
          <div className={styles.priceChangePerHour}>
            Porcentage Change Per Day
          </div>
        </div>
        {data
          ? data.map((el, index) => {
              return (
                <div className={styles.listPrice} key={index}>
                  <div className={styles.nameDiv}>
                    <div className={styles.id}>{el.id}</div>
                    <div className={styles.name}>{el.name}</div>
                  </div>

                  <img className={styles.symbol} src={el.image} alt={el.name} />
                  <div className={styles.currentPrice}> {el.currentPrice}</div>
                  <div
                    className={
                      Math.sign(el.priceChange) < 0
                        ? styles.priceChangeDown
                        : styles.priceChangeUp
                    }
                  >
                    $ {el.priceChange}
                  </div>
                  <div
                    className={
                      Math.sign(el.priceChangePerHour) > 0
                        ? styles.priceChangePerHourUp
                        : styles.priceChangePerHourDown
                    }
                  >
                    % {el.priceChangePerHour}
                  </div>
                </div>
              );
            })
          : "...loading"}
          </div>
      </div>
    </>
  );
};

export default ApiRest;
