import style from './ImageWrapper.module.css';
import imageSvSofia from '../../media/statuya_na_sveta_sofiya_(1).jpeg';

const ResultContainer = () => {
    return (
        <div className={style["image-container"]}>
            <img src={ imageSvSofia} alt="Статуя на Света София"/>
        </div>
    )
}

export default ResultContainer;