import {FC, Ref, useEffect, useRef, useState} from "react";

import s from './dialogbox.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";
import TypingText from "./TypingText";

// @ts-ignore
import save from "../../res/icons/save.svg"
import ServiceSave from "../services/ServiceSave";

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

    const onSave = () => {
        const story = localStorage.getItem("story")
        const id = "1"

        ServiceSave.save({id, story})
    }

    return (
        <>
            <div className={s.dialogbox__next} onClick={onNext}/>
            <div className={s.dialogbox}>
                <div className={s.dialogbox__header}>
                    <img onClick={onSave} className={s.dialogbox__save} src={save} alt="save"/>
                    <div className={s.dialogbox__lines}>
                        <div className={s.dialogbox__line}/>
                        <div className={`${s.dialogbox__line} ${s.dialogbox__line_small}`}/>
                    </div>
                    <div className={s.dialogbox__speaker}>{speaker}</div>
                    <div style={{transform: "scaleX(-1)"}} className={s.dialogbox__lines}>
                        <div className={s.dialogbox__line}/>
                        <div className={`${s.dialogbox__line} ${s.dialogbox__line_small}`}/>
                    </div>
                </div>
                <div className={s.dialogbox__body}>
                    <TypingText text={text} timer={timer} setTimer={setTimer}/>
                </div>
            </div>
        </>
    )
})

export default Dialogbox