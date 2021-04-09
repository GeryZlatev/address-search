import style from './SearchBar.module.css';

const SearchBar = () => {

    return (
        <div className={style["searchbar-wrapper"]}>
            <form className={style["search-form"]}>
                <label>
                    Търсене
                    <input
                    type="text"
                        autoComplete="true"
                        placeholder="София"
                        name="search"
                    />
                </label>
                <input
                    type="submit"
                    value="Намери"
                />
            </form>
        </div>
    )

}

export default SearchBar;