import React from "react";

// Styles
import styles from "./Coin.module.css";

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} draggable={false} src={image} alt={name} />
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.currentPrice}>$ {price.toLocaleString()}</span>
      <span
        className={
          priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange
        }
      >
        {Number(priceChange).toFixed(2)}
      </span>
      <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
      <span>ss</span>
    </div>
  );
};

export default Coin;
