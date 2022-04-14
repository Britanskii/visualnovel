import {FC} from "react";

import s from './game.module.sass'

import {observer} from "mobx-react-lite";

import Background from "./background/Background";
import Dialogbox from "./dialogbox/Dialogbox";
import Forefront from "./forefront/Forefront";
import Choices from "./choices/Choices";

import {MouseParallaxContainer, MouseParallaxChild} from "react-parallax-mouse";

const Game: FC = observer(() => {

    return (
        <div className={s.game}>
            <Grafic/>
            <Dialogbox/>
            <Choices/>
        </div>
    )
})

const Grafic: FC = () => {
    return (
        <MouseParallaxContainer useWindowMouseEvents = {true} className={s.container}>
            <MouseParallaxChild inverted = {true} className={s.container} factorX={0.01} >
                <Forefront/>
            </MouseParallaxChild>
            <MouseParallaxChild className={s.container}  factorX={0.005}>
                <Background/>
            </MouseParallaxChild>
        </MouseParallaxContainer>
    )
}


export default Game