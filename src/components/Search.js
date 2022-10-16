import { useState } from "react";

import classes from "./Search.module.scss";

const Search = () => {
  const [player, setPlayer] = useState("");
  const [stats, setStats] = useState("");

  const sendRequest = async () => {
    const response = await fetch(
      `https://www.balldontlie.io/api/v1/players?search=${player}`
    );
    const data = await response.json();
    setStats(data);
    console.log(data);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    sendRequest();
  };

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <form onSubmit={searchHandler}>
          <h2>Enter a Player Name</h2>
          <input type="text" onChange={(e) => setPlayer(e.target.value)} />
          <button>Search</button>
        </form>
      </div>
      {stats ? (
        <div className={classes.stats}>
          <div className={classes.text}>Name: {stats.data[0].first_name} {stats.data[0].last_name}</div>
          <div className={classes.text}>Team: {stats.data[0].team.full_name}</div>
          <div className={classes.text}>Height: {stats.data[0].height_feet} foot {stats.data[0].height_inches} inches</div>
          <div className={classes.text}>Weight: {stats.data[0].weight_pounds} LBS</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
