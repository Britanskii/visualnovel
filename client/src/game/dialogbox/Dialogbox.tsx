import {FC, useEffect, useState} from "react";

import s from './dialogbox.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../mobX/stores/StoreStory";

// @ts-ignore
import save from "../../res/icons/save.svg"
import Strings from "./Views/Strings";
import Box from "./Views/Box";
import {game, typeDialogbox} from "../interfaces/enums";
import {keyboardKey} from "@testing-library/user-event";
import StoreGame from "../mobX/stores/StoreGame";

const Dialogbox: FC = observer(() => {
    const {
        getText,
        getTypeDialogBox,
        setTypeDialogBox,
        incStoryPosition,
        getSpeaker,
        getIsNoChoice,
        setBackgrounds,
        getNoChoice,
        setNextLegend,
        setStory
    } = StoreStory

    const speaker = getSpeaker()
    const text: string = getText()
    const type: typeDialogbox = getTypeDialogBox()

    const onNext = () => {
        const isNoChoice = getIsNoChoice()

        if (StoreStory.getComplete() && !StoreStory.getIsChoice()) {
            setNextLegend()
            if (isNoChoice) {
                setStory(getNoChoice())
            }
        } else {
            StoreStory.setComplete(true)
        }
    }

    useEffect(() => {
        const onSkip = (e: { key: string; }) => {
            if (e.key === "Control") {
                onNext()
            }
        }

        const onNextSay = ((e: keyboardKey) => {
            if (e.keyCode === 32) {
                onNext()
            }
        })

        document.addEventListener("keydown", onSkip)

        document.addEventListener("keyup", onNextSay)

        return () => {
            document.removeEventListener("keydown", onSkip)
        }

    }, [])

    return (
        <>
            <div className={s.dialogbox__next} onClick={onNext}/>

            {type === typeDialogbox.BOX ?
                // @ts-ignore
                <Box onNext={onNext} speaker={speaker} text={text}/>
                // @ts-ignore
                : <Strings onNext={onNext}  speaker={speaker} text={text} center = {typeDialogbox.CENTER === type}/>
            }
        </>
    )
})

export default Dialogbox