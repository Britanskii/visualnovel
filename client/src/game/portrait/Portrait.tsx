import s from "./portrait.module.sass"

import background from "../../res/backgrounds/menu/main.jpg"

const Portrait = () => {

    return (
        <div className={s.portrait}>
            {/*<Lottie/>*/}
            <img className={s.portrait__background} src={background}/>
            Пожалуйста переверните телефон.
        </div>
    )
}

export default Portrait