import spinner from "../../res/icons/spinner.svg"

import s from "./preloader.module.sass"

const Preloader = () => {


    return (
        <div className={s.preloader}>
            <img src={spinner} alt="Загрузка..."/>
        </div>
    )
}

export default Preloader