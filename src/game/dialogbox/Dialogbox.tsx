import {FC, Ref, useEffect, useRef, useState} from "react";

import s from './dialogbox.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";
import TypingText from "./TypingText";

const Dialogbox: FC = observer(() => {
    const [timer, setTimer] = useState<NodeJS.Timer>()

    const {getText, incStoryPosition, getSpeaker, getNoChoice, setStory} = StoreStory

    const speaker = getSpeaker()
    const text: string = getText()

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

    return (
        <div onClick={onNext} className={s.dialogbox}>
            <div className={s.dialogbox__header}>{speaker}</div>
            <div className={s.dialogbox__line}/>
            <div className={s.dialogbox__body}>
                <TypingText text ={text} timer={timer} setTimer = {setTimer}/>
            </div>
        </div>
    )
})

export default Dialogbox