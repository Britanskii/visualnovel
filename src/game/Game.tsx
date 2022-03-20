import {FC, useEffect, useState} from "react";

import s from './game.module.sass'
import Background from "./background/Background";
import {observer} from "mobx-react-lite";
import Dialogbox from "./dialogbox/Dialogbox";
import Forefront from "./forefront/Forefront";
import TestStory from "./stories/TestStory";
import StoreStory from "./stores/StoreStory";
import Choices from "./choices/Choices";

const Game: FC = observer( () => {

    return (
        <div className={s.game}>
            <Background/>
            <Forefront/>
            <Dialogbox/>
            <Choices/>
        </div>
    )
})


export default Game