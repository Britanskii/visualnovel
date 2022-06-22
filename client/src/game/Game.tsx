import {FC, useEffect} from "react";

import s from './game.module.sass'

import {observer} from "mobx-react-lite";

import Background from "./background/Background";
import Dialogbox from "./dialogbox/Dialogbox";
import Forefront from "./forefront/Forefront";
import Choices from "./choices/Choices";

import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import StoreGame from "./stores/StoreGame";
import {stateGame, stateLoad} from "./interfaces/enums";
import useGetAdaptiveClass from "./hooks/useGetAdaptiveClass";
import Menu from "./menu/Menu";
import Preloader from "./preloader/Preloader";
import screenOrientationModule from "./functions/getScreenOrientation";
import Portrait from "./portrait/Portrait";
import StartStory from "./stories/chapter1/StartStory";

const Game: FC = observer(() => {

    const loadingComplete = StoreGame.getImagesLoad() === stateLoad.COMPLETE

    const classAdaptive = useGetAdaptiveClass(s, "game")

    const isPortrait = screenOrientationModule().direction === "portrait"

    return (
        <div className={`${s.game} ${classAdaptive}`}>
            {isPortrait && <Portrait/>}
            {!loadingComplete
                ? <Preloader/>
                : <Control/>
            }
            <Grafic/>
        </div>
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
            {StoreGame.getStateGame() === stateGame.GAME &&
            <>
                <Dialogbox/>
                <Choices/>
            </>}
        </>
    )
})


export default Game