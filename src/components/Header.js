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
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
