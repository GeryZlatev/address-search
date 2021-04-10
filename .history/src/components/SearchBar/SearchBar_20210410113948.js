import style from './SearchBar.module.css';
import ResultItem from '../ResultItem';
import { useState, useEffect } from 'react';
import * as serviceDB from '../../service/helpers/serviceDB';
import Suggestion from '../Suggestion';

const SearchBar = () => {
    const [suggest, setSuggest] = useState('');
    const [data, setData] = useState({});
    const [address, setAddress] = useState({});
    const [result, setResult] = useState({});

    const onChangeSuggestHandler = (e) => {
        setSuggest(e.target.value)
        serviceDB.suggest(suggest)
            .then(data => {
                setData(data);
            })
            .catch(err => console.log(err));
        console.log(data);
    }

    const onSelectAddress = (e) => {
        setSuggest(e.target.innerText);
        setData({})
        console.log(suggest)

    }

    const onSearchHandler = (e) => {
        e.preventDefault()
        serviceDB.findAddress(suggest)
            .then(res => {
                setAddress(res)
                setData({})
            })
        console.log(address)
    }

    return (
        <>
            <div className={style["searchbar-wrapper"]}>
                <form
                    className={style["search-form"]}
                    onSubmit={onSearchHandler}
                >
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
            </div>
            {suggest ? data.suggestions ? data.suggestions.map(x => <Suggestion choose={onSelectAddress}
                key={x.magicKey}
                magicKey={x.magicKey}
            >
                        {x.text}
            </Suggestion>) : null : null}
            
            {suggest ? address.candidates ? address.candidates.map((x, i) => <ResultItem
                    key={i}
                >{ x.address}</ResultItem>) : null : null}

        </>
    )

}

export default SearchBar;