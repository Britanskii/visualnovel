import s from "./portrait.module.sass"

import background from "../../res/backgrounds/menu/main.jpg"

import {CSSProperties} from 'react'

import rotate from "../../res/menu/rotate.json"
import Lottie from 'react-lottie';

const Portrait = () => {

    const style: CSSProperties = {position: 'absolute', zIndex: 1, left: "50%", transform: "translateX(-50%)", width: "35%"}

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: rotate
    };

    return (
        <div className={s.portrait}>
            <Lottie style={style} options={defaultOptions} isClickToPauseDisabled = {true}/>
            <img className={s.portrait__background} src={background}/>
            Пожалуйста переверните телефон.
        </div>
    )
}

export default Portrait