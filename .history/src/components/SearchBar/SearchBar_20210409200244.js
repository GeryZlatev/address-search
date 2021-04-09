import style from './SearchBar.module.css';

const SearchBar = () => {

    return (
        <div className={style["searchbar-wrapper"]}>
            <form className={style["search-form"]}>
                <label htmlFor="search">
                    Търсене
                </label>
                    <input
                    type="text"
                        autoComplete="true"
                        placeholder="София"
                    name="search"
                    id="search"
                    />
                
                <input
                    type="submit"
                    value="Намери"
                />
            </form>
        </div>
    )

}

export default SearchBar;