import {FC, Ref, useEffect, useRef, useState} from "react";

import s from './dialogbox.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";
import TypingText from "./TypingText";

// @ts-ignore
import save from "../../res/icons/save.svg"
import ServiceSave from "../services/ServiceSave";
import Strings from "./Views/Strings";
import Box from "./Views/Box";

const Dialogbox: FC = observer(() => {
    const [timer, setTimer] = useState<NodeJS.Timer>()
    const [view, setView] = useState()

    const {getText, getTypeDialogBox, setTypeDialogBox, incStoryPosition, getSpeaker, getNoChoice, setStory} = StoreStory

    const speaker = getSpeaker()
    const text: string = getText()
    const type: string | undefined = getTypeDialogBox()

    const onNext = () => {
        if (timer === undefined) {
            incStoryPosition()
            if (getNoChoice() !== undefined) {
                setStory(getNoChoice())
            }
        } else {
            clearInterval(timer)
            setTimer(undefined)
        }
    }

    useEffect(() => {
        const onSkip = (e: { key: string; }) => {
            if (e.key === "Control") {
                incStoryPosition()
            }
        }

        document.addEventListener("keydown", onSkip)

        return () => {
            document.removeEventListener("keydown", onSkip)
        }
    }, [])

    useEffect(() => {
        const changeDialogBox = (type: string | undefined) => {
            switch (type) {
                case "strings": // @ts-ignore
                    return <Strings onNext = {onNext} onSave = {onSave} speaker = {speaker} text = {text} timer = {timer} setTimer = {setTimer}/>
                default: // @ts-ignore
                    return <Box onNext = {onNext} onSave = {onSave} speaker = {speaker} text = {text} timer = {timer} setTimer = {setTimer}/>
            }
        }

        const view = changeDialogBox(type)

        // @ts-ignore
        setView(view)
    }, [text])

    const onSave = () => {
        const story = localStorage.getItem("story")
        const id = "1"

        ServiceSave.save({id, story})
    }



    return (
        <>
            <div className={s.dialogbox__next} onClick={onNext}/>
            {view}
        </>
    )
})

export default Dialogbox