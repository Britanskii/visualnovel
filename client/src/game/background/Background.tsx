import React, {FC, useEffect, useState} from "react";

import s from './background.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../mobX/stores/StoreStory";
import useImagesOnLoad from "../hooks/useImagesOnLoad";

const Background: FC = observer(() => {
    // const [backgroundLast, setBackgroundLast] = useState<string>()
    const [background, setBackground] = useState<string>()
    const [backgroundElements, setBackgroundElements] = useState<string>()
    const [backgroundNext, setBackgroundNext] = useState<string>()

    const allBackgrounds = StoreStory.getBackgrounds()
    const backgroundActive = StoreStory.getBackground()

    useImagesOnLoad(allBackgrounds)

    const getBackgroundFromArray = (background: string | []): {background: string, elements: string} => {
        if (typeof background === "object" && background.length !== 0) {
            return {background: background[0], elements: background[1]}
        } else if (typeof background === "string") {
            return {background, elements: ""}
        } else {
            console.error("Unknown background")
            return {background: "", elements: ""}
        }
    }

    useEffect(() => {
        // setBackgroundLast(background)

        const story = StoreStory.getStory()

        const backgroundFromArray = getBackgroundFromArray(backgroundActive)
        const backgroundNew: string = backgroundFromArray.background
        const backgroundElements: string = backgroundFromArray.elements

        setBackground(backgroundNew)

        if (!!backgroundElements) {
            setBackgroundElements(backgroundElements)
        } else {
            setBackgroundElements("")
        }

        for (let index = StoreStory.getStoryPosition() + 1; story.legend.length > index; index++) {
            if ("background" in story.legend[index]) {
                const backgroundNext = story.legend[index].background
                const backgroundNextFromArray = getBackgroundFromArray(backgroundNext)
                setBackgroundNext(backgroundNextFromArray.background)
                break
            }
        }
    }, [backgroundActive])

    return (
        <>
            {/*<img className={`${s.background} ${s.background__last}`}*/}
            {/*     src={backgroundLast}/>*/}
            <img className={`${s.background}`}
                 src={background}/>
            {!!backgroundElements &&
            <img className={`${s.background}`}
                 src={backgroundElements}/>
            }
            <img className={`${s.background} ${s.background__next}`}
                 src={backgroundNext}/>
        </>
    )
})

export default Background