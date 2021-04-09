import style from './ResultItem.module.css';

const ResultItem = (props) => {

    return (
        <div className={style["result-item-wrapper"]}>
            <i className="fas fa-map-marker-alt"></i>
            <p>{props.address}</p>
            <span>{ props.city}</span>

        </div>
    )

}

export default ResultItem;