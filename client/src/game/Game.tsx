import {FC} from "react";

import s from './game.module.sass'

import {observer} from "mobx-react-lite";

import Background from "./background/Background";
import Dialogbox from "./dialogbox/Dialogbox";
import Forefront from "./forefront/Forefront";
import Choices from "./choices/Choices";

import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import StoreGame from "./stores/StoreGame";
import {stateGame} from "./interfaces/enums";
import useGetAdaptiveClass from "./hooks/useGetAdaptiveClass";
import Menu from "./menu/Menu";

const Game: FC = observer(() => {

    const classAdaptive = useGetAdaptiveClass(s, "game")

    return (
        <div className={`${s.game} ${classAdaptive}`}>
            <Menu/>
            <Grafic/>
            <Dialogbox/>
            <Choices/>
        </div>
    )
})

//Убрать обсервер если паралакс не отработает
const Grafic: FC = observer(() => {

    return (
        <MouseParallaxContainer enabled={false} useWindowMouseEvents = {true} className={s.container}>
            <MouseParallaxChild inverted = {true} className={s.container} factorX={0.01} >
                <Forefront/>
            </MouseParallaxChild>
            <MouseParallaxChild className={s.container} factorX={0.005}>
                <Background/>
            </MouseParallaxChild>
        </MouseParallaxContainer>
    )
})


export default Game