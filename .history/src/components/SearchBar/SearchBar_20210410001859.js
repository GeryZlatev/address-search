import style from './SearchBar.module.css';
import ResultItem from '../ResultItem';
import { useState } from 'react';
import * as serviceDB from '../../service/helpers/serviceDB';

const SearchBar = () => {
    const [suggest, setSuggest] = useState('');
    const [data, setData] = useState([]);

    const onChangeSuggestHandler = (e) => {
        setSuggest(e.target.value)
        serviceDB.suggest(suggest)
            .then(data => {
                setData(data);
            })
            .catch(err => console.log(err));
        console.log('dHA9MCNsb2M9Mjg1NTE4MjMjbG5nPTIzI3BsPTE3NjExMzYyI2xicz0xNDozNDMyMTE1Nw==')
        console.log('')
    }
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
                    value={suggest}
                    onChange={onChangeSuggestHandler}
                    />
                
                <input
                    type="submit"
                    value="Намери"
                />
                
            </form>
            <ResultItem
            address="кв.Дианабад, ул.Самоков 15"
                city="София" />
                        <ResultItem
            address="кв.Дианабад, ул.Самоков 15"
            city="София"/>
        </div>
    )

}

export default SearchBar;