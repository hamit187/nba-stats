import { useState, useEffect } from "react";

import classes from "./Search.module.scss";

let initialRender = true;

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
          <div className={classes.fname}>Name: {stats.data[0].first_name} {stats.data[0].last_name}</div>
          <div className={classes.fname}>Team: {stats.data[0].team.full_name}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
