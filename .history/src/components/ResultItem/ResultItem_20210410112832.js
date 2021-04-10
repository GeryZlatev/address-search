import style from './ResultItem.module.css';

const ResultItem = (props) => {

    return (
        <div className={style["result-item-wrapper"]}>
            <span><i className="fas fa-map-marker-alt"></i></span>
            {props.children}
        </div>
    )

}

export default ResultItem;