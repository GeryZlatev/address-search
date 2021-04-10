import style from './SearchBar.module.css';
import ResultItem from '../ResultItem';
import { useState, useEffect } from 'react';
import * as serviceDB from '../../service/helpers/serviceDB';
import Suggestion from '../Suggestion';
import Autosearch from '../Autosearch';

const SearchBar = () => {
    const [suggest, setSuggest] = useState('');
    const [data, setData] = useState({});
    const [address, setAddress] = useState('');

    // useEffect(() => {
    //     if (data.length) {
    //         data.map(x => <Suggestion key={x.magicKey}>{x.text}</Suggestion>)
    //     }
        
    // }, [data])

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
        <>
                    <div className={style["searchbar-wrapper"]}>
            <form className={style["search-form"]}>
                {/* <label htmlFor="search">
                    
                    <i className="fas fa-search"></i>
                </label>
                    <input
                    type="text"
                    placeholder="Въведете адрес"
                    name="search"
                    id="search"
                    value={suggest}
                    onChange={onChangeSuggestHandler}
                /> */}
                    <Autosearch onChange={onChangeSuggestHandler} data={ data}/>
                    
                
                <input
                    type="submit"
                    value="Намери"
                    />
                    {suggest ? data.suggestions ? data.suggestions.map(x => <Suggestion
                        choose={(e) => console.log(e.target.innerText)}
                        key={x.magicKey}>
                        {x.text}
                    </Suggestion>) : null : null}
                
            </form>
{/* 
            <ResultItem
            address="кв.Дианабад, ул.Самоков 15"
                city="София" />
                        <ResultItem
            address="кв.Дианабад, ул.Самоков 15"
            city="София"/> */}
            </div>

        </>
    )

}

export default SearchBar;