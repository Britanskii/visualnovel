import {FC, useEffect, useState} from "react";

import s from './background.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";

const Background: FC = observer(() => {
    const [backgrounds, setBackgrounds] = useState<{ name: string, src: any }[]>([])
    const [backgroundsActive, setBackgroundsActive] = useState<JSX.Element[]>([])

    const backgroundActive = StoreStory.getBackground()

    useEffect(() => {

        const chapter = StoreStory.getBackgrounds()

        const allBackgrounds = []

        let bg: string

        let i = 0

        // @ts-ignore
        for (bg in chapter) {
            if (i % 2 === 0)
            allBackgrounds.push(
                // @ts-ignore
                {name: bg, src: bg}
            )
        }

        setBackgrounds(allBackgrounds)
        setNewBackgrounds(allBackgrounds)
    }, [StoreStory.getBackgrounds()])


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

    return (
        <>
            {backgroundsActive}
        </>
    )
})

export default Background