import React from "react";

// Gif
import spinner from "../gif/spinner.gif";

const Loader = () => {
  return (
    <div>
      <img width="700px" height="400px" src={spinner} alt="Loading" />
      <h1>Loading ...</h1>
    </div>
  );
};

export default Loader;
