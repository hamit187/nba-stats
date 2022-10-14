import classes from './Search.module.scss';

const Search = () => {
    return (
        <div className={classes.search}>
            <form>
                <h2>Enter a Player Name</h2>
                <input />
                <button>Search</button>
            </form>
        </div>
    );
};

export default Search;