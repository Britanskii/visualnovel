import {FC, useEffect, useState} from "react";

import s from './background.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";
import {chapter1} from "./backgrounds";


const arr = [
    "lavronda",
    "lavronda",
    "lavronda",
    "lavronda",
    "lavronda",
    "lavronda",
    "lavronda",
    "lavronda",
    "lavronda",
]

const Background: FC = observer(() => {
    const [backgrounds, setBackgrounds] = useState<JSX.Element[]>([])

    const backgroundActive = StoreStory.getBackground()


    const chapter: any = chapter1

    useEffect(() => {

        const allBackgrounds = []

        let bg: string

        for (bg in chapter) {
            const active = bg === backgroundActive
            allBackgrounds.push(
                <img alt={bg} key={bg} id={bg} className={`${s.background} ${active ? s.background__active : ""}`} src={chapter[bg]}/>
            )
        }

        setBackgrounds(allBackgrounds)

    }, [chapter, backgroundActive])

    return (
        <>
            {backgrounds}
        </>
        // <img src={bg} className={s.background}/>
    )
})

export default Background