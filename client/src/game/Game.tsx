import {CSSProperties, FC} from "react";

import s from './game.module.sass'

import {observer} from "mobx-react-lite";

import Background from "./background/Background";
import Dialogbox from "./dialogbox/Dialogbox";
import Forefront from "./forefront/Forefront";
import Choices from "./choices/Choices";

import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import StoreGame from "./mobX/stores/StoreGame";
import {game, load} from "./interfaces/enums";
import useGetAdaptiveClass from "./hooks/useGetAdaptiveClass";
import Menu from "./menu/Menu";
import Preloader from "./preloader/Preloader";
import StoreSettings from "./mobX/stores/StoreSettings";
import calcFullscreen from "./functions/calcFullscreen";

const Game: FC = observer(() => {

    const loadingComplete = StoreGame.getImagesLoad() === load.COMPLETE

    const classAdaptive = useGetAdaptiveClass(s, "game")

    const isFullscreen = StoreSettings.getIsFullscreen()

    const styleFullscreen = isFullscreen ? calcFullscreen(): {}

    return (
        <>
            <div style={styleFullscreen}
                 className={`${s.game} ${classAdaptive} ${isFullscreen ? s.game__fullscreen : ""}`}>
                <Preloader loadingComplete={loadingComplete}/>
                <Control/>
                <Grafic/>
            </div>
        </>
    )
})

//Убрать обсервер если паралакс не отработает
const Grafic: FC = observer(() => {

    return (
        <>
            <Menu/>
            <MouseParallaxContainer enabled={true} useWindowMouseEvents={true} className={s.container}>
                <MouseParallaxChild inverted={true} className={s.container} factorX={0.01}>
                    <Forefront/>
                </MouseParallaxChild>
                <MouseParallaxChild className={s.container} factorX={0.005}>
                    <Background/>
                </MouseParallaxChild>
            </MouseParallaxContainer>
        </>
    )
})

const Control: FC = observer(() => {

    return (
        <>
            {StoreGame.getStateGame() === game.GAME &&
            <>
                <Dialogbox/>
                <Choices/>
            </>}
        </>
    )
})


export default Game