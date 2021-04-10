import style from './Suggestion.module.css';

const Suggestion = ({children}) => {
    return (
        <div className={style["suggestion-address"]}>
            <i className="fas fa-map-marker-alt-custom"></i>
            {children}
        </div>
    )

}

export default Suggestion;