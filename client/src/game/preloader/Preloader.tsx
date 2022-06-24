
import background from "../../res/menu/main.jpg"

import s from "./preloader.module.sass"
import Lottie from "react-lottie";
import {CSSProperties} from "react";
import loading from "../../res/jsons/preloader.json";

// @ts-ignore
const Preloader = ({loadingComplete}) => {

    const style: CSSProperties = {position: 'absolute', zIndex: 2, left: "50%", transform: "translateX(-50%)", width: "35%"}

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading
    };

    return (
        <div className={`${s.preloader} ${loadingComplete ? "" : s.preloader__active}`}>
            <Lottie style={style} options={defaultOptions} isClickToPauseDisabled = {true}/>
            <div className={s.preloader__blur}/>
            <img className={s.preloader__background}  src={background}/>
        </div>
    )
}

export default Preloader