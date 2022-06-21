import {FC, useEffect, useState} from "react";

import s from './background.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";

const Background: FC = observer(() => {
    const [backgroundsActive, setBackgroundsActive] = useState<JSX.Element>()

    const backgroundActive = StoreStory.getBackground()

    useEffect(() => {
        console.log(backgroundActive)

        const background = <img className={`${s.background}`}
                                src={backgroundActive}/>

        setBackgroundsActive(background)
    }, [backgroundActive])

    return (
        <>
            {backgroundsActive}
        </>
    )
})

export default Background