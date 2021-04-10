import style from './SearchBar.module.css';
import ResultItem from '../ResultItem';
import { useState } from 'react';
import * as serviceDB from '../../service/helpers/serviceDB';

const SearchBar = () => {
    const [suggest, setSuggest] = useState('');
    const [data, setData] = useState([]);
    const [address, setAddress] = useState('');

    const onChangeSuggestHandler = (e) => {
        setSuggest(e.target.value)
        serviceDB.suggest(suggest)
            .then(data => {
                setData(data);
            })
            .catch(err => console.log(err));
        console.log(data);
    }
    return (
        <div className={style["searchbar-wrapper"]}>
            <form className={style["search-form"]}>
                <label htmlFor="search">
                    
                    <i className="fas fa-search"></i>
                </label>
                    <input
                    type="text"
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
            {data.length ? data.map(x => <div style={{"background": "green", "z-index": 100}} key={ x.magicKey}>{x.text}</div>) : null}
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