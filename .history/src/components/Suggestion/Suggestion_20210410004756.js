import style from './Suggestion.module.css';

const Suggestion = ({children}) => {
    return (
        <div className={style["suggestion-address"]}>
            {children}
        </div>
    )

}

export default Suggestion;