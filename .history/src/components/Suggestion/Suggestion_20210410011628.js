import style from './Suggestion.module.css';

const Suggestion = ({children}) => {
    return (
        <div className={style["suggestion-address"]}>
            <span className={style.icon}>
                <i className="fas fa-map-marker-alt"></i>
            </span>
            {children}
        </div>
    )

}

export default Suggestion;