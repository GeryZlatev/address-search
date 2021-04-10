import style from './SearchBar.module.css';
// import ResultItem from '../ResultItem';
import { useState, useEffect } from 'react';
import * as serviceDB from '../../service/helpers/serviceDB';
import Suggestion from '../Suggestion';

const SearchBar = () => {
    const [suggest, setSuggest] = useState('');
    const [data, setData] = useState({});
    const [address, setAddress] = useState('');
    const [result, setResult] = useState([]);
    const [magicKey, setMagicKey] = useState({});

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

    const onSelectAddress = (e) => {
        setAddress(e.target.innerText);
        serviceDB.findAddress(address)
            .then(data => {
                setResult(data.candidates)

            });
        console.log(result)

    }

    return (
        <>
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
{/* 
            <ResultItem
            address="кв.Дианабад, ул.Самоков 15"
                city="София" />
                        <ResultItem
            address="кв.Дианабад, ул.Самоков 15"
            city="София"/> */}
            </div>
            {suggest ? data.suggestions ? data.suggestions.map(x => <Suggestion choose={onSelectAddress}
                key={x.magicKey}
                magicKey={x.magicKey}
            >
                        {x.text}
                    </Suggestion>) : null : null}

        </>
    )

}

export default SearchBar;