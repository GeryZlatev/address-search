import style from './Suggestion.module.css';

const Suggestion = (props) => {
    return (
        <div className={style["suggestion-address"]} onClick={props.choose}>
            <span className={style.icon}>
                <i className="fas fa-map-marker-alt"></i>
            </span>
            {props.children}
        </div>
    )

}

export default Suggestion;