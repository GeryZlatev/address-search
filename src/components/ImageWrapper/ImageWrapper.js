import style from './ImageWrapper.module.css';
import imageSofia from '../../media/gerb.gif';

const ResultContainer = () => {
    return (
        <div className={style["image-container"]}>
            <img src={ imageSofia} alt="Герб на гр.София"/>
        </div>
    )
}

export default ResultContainer;