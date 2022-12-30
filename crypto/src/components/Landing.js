import React, { useState, useEffect } from "react";

// API
import { getCoin } from "../services/api";

// Components
import Loader from "./Loader";
import Coin from "./Coin";
import NothingFound from "./NothingFound";

// Styles
import styles from "./Landing.module.css";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoins(data);
    };

    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const clearSearchBox = () => {
    setSearch("");
  };

  return (
    <>
      <form className={styles.lab_input}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search Coins"
          value={search}
          onChange={searchHandler}
        />
        <button
          className={styles.btn_clear}
          type="reset"
          onClick={clearSearchBox}
        >
          ✕
        </button>
      </form>
      {/* == */}

      {coins.length ? (
        <div className={styles.coinContainer}>
          {searchedCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}

      {!searchedCoins.length && coins.length && (
        <NothingFound searchedCoins={searchedCoins} />
      )}
    </>
  );
};

export default Landing;
