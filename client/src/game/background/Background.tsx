import React, {FC, useEffect, useState} from "react";

import s from './background.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../mobX/stores/StoreStory";
import useImagesOnLoad from "../hooks/useImagesOnLoad";

const Background: FC = observer(() => {
    const [backgroundNext, setBackgroundNext] = useState<string>()

    const allBackgrounds = StoreStory.getBackgrounds()
    const backgroundActive = StoreStory.getBackground()

    useImagesOnLoad(allBackgrounds)

    useEffect(() => {
        const story = StoreStory.getStory()

        for (let index = StoreStory.getStoryPosition() + 1; story.legend.length > index; index++) {
            if ("background" in story.legend[index]) {
                setBackgroundNext(story.legend[index].background)
                break
            }
        }
    }, [backgroundActive])

    return (
        <>
            <img className={`${s.background}`}
                 src={backgroundActive}/>
            <img style={{visibility: "hidden"}}
                 src={backgroundNext}/>
        </>
    )
})

export default Background