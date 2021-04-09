import style from './ResultItem.module.css';

const ResultItem = (props) => {

    return (
        <div className={style["result-item-wrapper"]}>
            <i className="fas fa-map-marker-alt"></i>
            <p className={style["address-info"]}>{props.address}</p>
            <span className={style.city}>{ props.city}</span>

        </div>
    )

}

export default ResultItem;