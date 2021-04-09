import style from './SearchBar.module.css';
import ResultContainer from '../ResultContainer';
import ResultItem from '../ResultItem';

const SearchBar = () => {

    return (
        <div className={style["searchbar-wrapper"]}>
            <form className={style["search-form"]}>
                <label htmlFor="search">
                    
                    <i className="fas fa-search"></i>
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
                
            </form>
            <ResultItem
            address="кв.Дианабад, ул.Самоков 15"
            city="София"/>
        </div>
    )

}

export default SearchBar;