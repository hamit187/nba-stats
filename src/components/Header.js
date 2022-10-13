import classes from "./header.module.scss";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes.logo}>
            <h1>Nba Stats</h1>
        </div>
        <nav className={classes.nav}>
        <ul>
          <li>
            <a href="#">Players</a>
          </li>
          <li>
            <a href="#">Teams</a>
          </li>
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">Stats</a>
          </li>
          <li>
            <a href="#">Season Averages</a>
          </li>
        </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
