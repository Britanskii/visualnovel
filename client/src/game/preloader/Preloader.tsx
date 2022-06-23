import spinner from "../../res/icons/spinner.svg"
import background from "../../res/backgrounds/menu/main.jpg"

import s from "./preloader.module.sass"

// @ts-ignore
const Preloader = ({loadingComplete}) => {

    return (
        <div className={`${s.preloader} ${loadingComplete ? "" : s.preloader__active}`}>
            <img className={s.preloader__spinner} src={spinner} alt="Загрузка..."/>
            <img className={s.preloader__background}  src={background} alt=""/>
        </div>
    )
}

export default Preloader