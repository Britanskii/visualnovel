import {FC, useEffect, useState} from "react";

import s from './background.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";
import {chapter1} from "./backgrounds";
import {log} from "util";


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
    const [backgrounds, setBackgrounds] = useState<{ name: string, src: any }[]>([])
    const [backgroundsActive, setBackgroundsActive] = useState<JSX.Element[]>([])

    const backgroundActive = StoreStory.getBackground()


    const chapter: any = chapter1

    useEffect(() => {

        const allBackgrounds = []

        let bg: string

        for (bg in chapter) {
            allBackgrounds.push(
                {name: bg, src: chapter[bg]}
            )
        }

        console.log(allBackgrounds)

        setBackgrounds(allBackgrounds)
        setNewBackgrounds(allBackgrounds)
    }, [chapter])

    const setNewBackgrounds = (bg: { name: any; src: any; }[] | null = null) => {
        if (bg === null) {
            const newBackgrounds = backgrounds.map(({name, src}) => {
                const active = backgroundActive === name
                return (
                    <img className={`${s.background} ${active ? s.background__active : ""}`} key={name} id={name}
                         src={src}
                         alt={name}/>
                )
            })

            setBackgroundsActive(newBackgrounds)
        } else {
            const newBackgrounds = bg.map(({name, src}) => {
                const active = backgroundActive === name
                return (
                    <img className={`${s.background} ${active ? s.background__active : ""}`} key={name} id={name}
                         src={src}
                         alt={name}/>
                )
            })

            setBackgroundsActive(newBackgrounds)
        }
    }

    useEffect(() => {
        if (!!backgrounds.length) setNewBackgrounds()
    }, [backgroundActive])

    console.log('anime')

    return (
        <>
            {backgroundsActive}
        </>
        // <img src={bg} className={s.background}/>
    )
})

export default Background