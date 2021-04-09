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
                    placeholder="Въведете адрес"
                    name="search"
                    id="search"
                    />
                
                <input
                    type="submit"
                    value="Намери"
                />
                <i class="fas fa-search"></i>
            </form>
        </div>
    )

}

export default SearchBar;