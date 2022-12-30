import React from "react";

// Styles
import styles from "./NothingFound.module.css";

const NothingFound = ({ searchedCoins }) => {
  return (
    <div>
      {!searchedCoins.length && (
        <div className={styles.errorContainer}>
          <div className={styles.error}>404</div>
          <br />
          <br />
          <span className={styles.info}>Nothing Found</span>
          <img
            alt="nothingFound"
            src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif"
            className={styles.static}
          />
        </div>
      )}
    </div>
  );
};

export default NothingFound;
