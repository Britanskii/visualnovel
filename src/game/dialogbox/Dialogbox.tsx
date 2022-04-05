import {FC, Ref, useEffect, useRef, useState} from "react";

import s from './dialogbox.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";
import TypingText from "./TypingText";

const Dialogbox: FC = observer(() => {
    const timer: Ref<NodeJS.Timer> = useRef(null)

    const {getText, incStoryPosition, getSpeaker, getNoChoice, setStory} = StoreStory

    const speaker = getSpeaker()
    const text: string = getText()


    const onNext = () => {
        if (timer === null) {
            incStoryPosition()
            if (getNoChoice() !== undefined) {
                setStory(getNoChoice())
            }
        } else {
            clearInterval(timer.current!)
            //Добавить функцию выводе текста сразу
        }
    }



    return (
        <div onClick={onNext} className={s.dialogbox}>
            <div className={s.dialogbox__header}>{speaker}</div>
            <div className={s.dialogbox__line}/>
            <div className={s.dialogbox__body}>
                <TypingText/>
            </div>
        </div>
    )
})

export default Dialogbox