import {FC, useEffect, useState} from "react";

import s from './dialogbox.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";

// @ts-ignore
import save from "../../res/icons/save.svg"
import Strings from "./Views/Strings";
import Box from "./Views/Box";
import {adaptive, typeDialogbox} from "../interfaces/enums";
import useGetAdaptive from "../hooks/useGetAdaptive";

const Dialogbox: FC = observer(() => {
    const [timer, setTimer] = useState<NodeJS.Timer>()

    const {
        getText,
        getTypeDialogBox,
        setTypeDialogBox,
        incStoryPosition,
        getSpeaker,
        getNoChoice,
        setStory
    } = StoreStory

    const speaker = getSpeaker()
    const text: string = getText()
    const type: typeDialogbox = getTypeDialogBox()

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

        console.log(adaptive)


        return () => {
            document.removeEventListener("keydown", onSkip)
        }

    }, [])

    return (
        <>
            <div className={s.dialogbox__next} onClick={onNext}/>

            {type === typeDialogbox.BOX ?
                // @ts-ignore
                <Box onNext={onNext} speaker={speaker} text={text} timer={timer} setTimer={setTimer}/>
                // @ts-ignore
                : <Strings onNext={onNext}  speaker={speaker} text={text} timer={timer}
                           setTimer={setTimer} center = {typeDialogbox.CENTER === type}/>
            }
        </>
    )
})

export default Dialogbox